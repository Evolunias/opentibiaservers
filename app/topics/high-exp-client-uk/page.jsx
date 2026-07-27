import HighExpClientUkKeywordPage, { generateMetadata } from './high-exp-client-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpClientUkKeywordPage />;
}
