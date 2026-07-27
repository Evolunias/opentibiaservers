import ArchlightFranceServersKeywordPage, { generateMetadata } from './archlight-france-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArchlightFranceServersKeywordPage />;
}
