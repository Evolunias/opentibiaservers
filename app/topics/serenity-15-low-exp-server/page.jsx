import Serenity15LowExpServerKeywordPage, { generateMetadata } from './serenity-15-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity15LowExpServerKeywordPage />;
}
