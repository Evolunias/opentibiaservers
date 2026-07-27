import ArchlightArgentinaServerKeywordPage, { generateMetadata } from './archlight-argentina-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArchlightArgentinaServerKeywordPage />;
}
