import Serenity96LowExpServerKeywordPage, { generateMetadata } from './serenity-9-6-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity96LowExpServerKeywordPage />;
}
