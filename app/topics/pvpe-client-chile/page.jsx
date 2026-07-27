import PvpeClientChileKeywordPage, { generateMetadata } from './pvpe-client-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeClientChileKeywordPage />;
}
