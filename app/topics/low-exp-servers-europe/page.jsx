import LowExpServersEuropeKeywordPage, { generateMetadata } from './low-exp-servers-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpServersEuropeKeywordPage />;
}
