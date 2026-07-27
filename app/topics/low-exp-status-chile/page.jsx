import LowExpStatusChileKeywordPage, { generateMetadata } from './low-exp-status-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpStatusChileKeywordPage />;
}
