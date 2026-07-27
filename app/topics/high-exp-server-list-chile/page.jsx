import HighExpServerListChileKeywordPage, { generateMetadata } from './high-exp-server-list-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpServerListChileKeywordPage />;
}
