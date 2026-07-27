import FreshStartServersChileKeywordPage, { generateMetadata } from './fresh-start-servers-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartServersChileKeywordPage />;
}
