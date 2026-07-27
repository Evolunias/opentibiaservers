import HighExpStatusGermanyKeywordPage, { generateMetadata } from './high-exp-status-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpStatusGermanyKeywordPage />;
}
