import RealestaEuropeServerKeywordPage, { generateMetadata } from './realesta-europe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaEuropeServerKeywordPage />;
}
