import Serenity12EvoServersKeywordPage, { generateMetadata } from './serenity-12-evo-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity12EvoServersKeywordPage />;
}
