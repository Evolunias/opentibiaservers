import HighExpServerChileKeywordPage, { generateMetadata } from './high-exp-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpServerChileKeywordPage />;
}
