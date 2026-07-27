import HighExpClientGermanyKeywordPage, { generateMetadata } from './high-exp-client-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpClientGermanyKeywordPage />;
}
