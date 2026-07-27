import HighExpStatusChileKeywordPage, { generateMetadata } from './high-exp-status-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpStatusChileKeywordPage />;
}
