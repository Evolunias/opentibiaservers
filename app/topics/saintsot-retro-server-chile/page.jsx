import SaintsotRetroServerChileKeywordPage, { generateMetadata } from './saintsot-retro-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotRetroServerChileKeywordPage />;
}
