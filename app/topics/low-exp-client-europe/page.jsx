import LowExpClientEuropeKeywordPage, { generateMetadata } from './low-exp-client-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpClientEuropeKeywordPage />;
}
