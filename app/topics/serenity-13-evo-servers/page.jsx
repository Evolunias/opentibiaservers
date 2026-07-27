import Serenity13EvoServersKeywordPage, { generateMetadata } from './serenity-13-evo-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity13EvoServersKeywordPage />;
}
