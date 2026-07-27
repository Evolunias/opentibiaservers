import TibianusEuropeServerKeywordPage, { generateMetadata } from './tibianus-europe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusEuropeServerKeywordPage />;
}
