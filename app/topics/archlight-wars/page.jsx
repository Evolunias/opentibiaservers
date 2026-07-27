import ArchlightWarsKeywordPage, { generateMetadata } from './archlight-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArchlightWarsKeywordPage />;
}
