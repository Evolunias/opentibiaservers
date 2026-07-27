import PvpOtServerChileKeywordPage, { generateMetadata } from './pvp-ot-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpOtServerChileKeywordPage />;
}
