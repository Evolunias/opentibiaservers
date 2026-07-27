import AureraGlobalRetroServerChileKeywordPage, { generateMetadata } from './aurera-global-retro-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobalRetroServerChileKeywordPage />;
}
