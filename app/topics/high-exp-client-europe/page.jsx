import HighExpClientEuropeKeywordPage, { generateMetadata } from './high-exp-client-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpClientEuropeKeywordPage />;
}
