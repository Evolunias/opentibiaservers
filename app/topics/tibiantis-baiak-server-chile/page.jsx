import TibiantisBaiakServerChileKeywordPage, { generateMetadata } from './tibiantis-baiak-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisBaiakServerChileKeywordPage />;
}
