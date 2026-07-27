import VenoreotRetroServerChileKeywordPage, { generateMetadata } from './venoreot-retro-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotRetroServerChileKeywordPage />;
}
