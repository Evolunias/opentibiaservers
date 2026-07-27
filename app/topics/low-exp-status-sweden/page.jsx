import LowExpStatusSwedenKeywordPage, { generateMetadata } from './low-exp-status-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpStatusSwedenKeywordPage />;
}
