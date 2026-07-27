import LumineraEuropeServerKeywordPage, { generateMetadata } from './luminera-europe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraEuropeServerKeywordPage />;
}
