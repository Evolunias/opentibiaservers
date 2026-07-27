import MiracleRetroServerChileKeywordPage, { generateMetadata } from './miracle-retro-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MiracleRetroServerChileKeywordPage />;
}
