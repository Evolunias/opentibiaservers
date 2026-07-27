import Tibia86ServerChileKeywordPage, { generateMetadata } from './tibia-8-6-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86ServerChileKeywordPage />;
}
