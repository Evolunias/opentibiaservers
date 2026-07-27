import ArchlightEuropeServersKeywordPage, { generateMetadata } from './archlight-europe-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArchlightEuropeServersKeywordPage />;
}
