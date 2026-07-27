import AlasteraRetroServerChileKeywordPage, { generateMetadata } from './alastera-retro-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraRetroServerChileKeywordPage />;
}
