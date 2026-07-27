import LowExpClientGermanyKeywordPage, { generateMetadata } from './low-exp-client-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpClientGermanyKeywordPage />;
}
