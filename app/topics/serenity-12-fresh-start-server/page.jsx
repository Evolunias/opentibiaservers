import Serenity12FreshStartServerKeywordPage, { generateMetadata } from './serenity-12-fresh-start-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity12FreshStartServerKeywordPage />;
}
