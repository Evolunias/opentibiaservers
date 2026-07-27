import LowExpServerListChileKeywordPage, { generateMetadata } from './low-exp-server-list-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpServerListChileKeywordPage />;
}
