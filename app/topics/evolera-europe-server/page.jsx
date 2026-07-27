import EvoleraEuropeServerKeywordPage, { generateMetadata } from './evolera-europe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraEuropeServerKeywordPage />;
}
