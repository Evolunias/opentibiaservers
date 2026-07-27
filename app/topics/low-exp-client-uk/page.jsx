import LowExpClientUkKeywordPage, { generateMetadata } from './low-exp-client-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpClientUkKeywordPage />;
}
