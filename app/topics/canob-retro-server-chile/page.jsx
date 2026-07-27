import CanobRetroServerChileKeywordPage, { generateMetadata } from './canob-retro-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobRetroServerChileKeywordPage />;
}
