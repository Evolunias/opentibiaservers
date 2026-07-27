import Serenity11FreshStartServerKeywordPage, { generateMetadata } from './serenity-11-fresh-start-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity11FreshStartServerKeywordPage />;
}
