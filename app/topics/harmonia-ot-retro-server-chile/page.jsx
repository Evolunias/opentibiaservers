import HarmoniaOtRetroServerChileKeywordPage, { generateMetadata } from './harmonia-ot-retro-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOtRetroServerChileKeywordPage />;
}
