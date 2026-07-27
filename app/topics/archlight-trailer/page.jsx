import ArchlightTrailerKeywordPage, { generateMetadata } from './archlight-trailer';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArchlightTrailerKeywordPage />;
}
