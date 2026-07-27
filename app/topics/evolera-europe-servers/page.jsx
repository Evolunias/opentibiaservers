import EvoleraEuropeServersKeywordPage, { generateMetadata } from './evolera-europe-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraEuropeServersKeywordPage />;
}
