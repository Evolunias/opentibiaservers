import MediviaRetroServerChileKeywordPage, { generateMetadata } from './medivia-retro-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaRetroServerChileKeywordPage />;
}
