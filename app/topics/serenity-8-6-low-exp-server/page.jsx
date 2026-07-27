import Serenity86LowExpServerKeywordPage, { generateMetadata } from './serenity-8-6-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity86LowExpServerKeywordPage />;
}
