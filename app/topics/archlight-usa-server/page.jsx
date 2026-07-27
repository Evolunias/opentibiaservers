import ArchlightUsaServerKeywordPage, { generateMetadata } from './archlight-usa-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArchlightUsaServerKeywordPage />;
}
