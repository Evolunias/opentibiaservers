import LowExpStatusGermanyKeywordPage, { generateMetadata } from './low-exp-status-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpStatusGermanyKeywordPage />;
}
