import EvoTibiaraServersKeywordPage, { generateMetadata } from './evo-tibiara-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoTibiaraServersKeywordPage />;
}
