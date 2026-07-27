import PvpeServersChileKeywordPage, { generateMetadata } from './pvpe-servers-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeServersChileKeywordPage />;
}
