import Serenity11LowExpServerKeywordPage, { generateMetadata } from './serenity-11-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity11LowExpServerKeywordPage />;
}
