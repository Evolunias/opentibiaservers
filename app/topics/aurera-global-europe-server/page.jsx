import AureraGlobalEuropeServerKeywordPage, { generateMetadata } from './aurera-global-europe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobalEuropeServerKeywordPage />;
}
