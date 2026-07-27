import HighExpStatusUkKeywordPage, { generateMetadata } from './high-exp-status-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpStatusUkKeywordPage />;
}
