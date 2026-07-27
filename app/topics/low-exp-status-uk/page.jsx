import LowExpStatusUkKeywordPage, { generateMetadata } from './low-exp-status-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpStatusUkKeywordPage />;
}
