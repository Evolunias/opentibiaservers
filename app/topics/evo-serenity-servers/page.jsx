import EvoSerenityServersKeywordPage, { generateMetadata } from './evo-serenity-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoSerenityServersKeywordPage />;
}
