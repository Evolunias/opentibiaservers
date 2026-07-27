import UnlineRetroServerChileKeywordPage, { generateMetadata } from './unline-retro-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineRetroServerChileKeywordPage />;
}
