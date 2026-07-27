import ArchlightUkServersKeywordPage, { generateMetadata } from './archlight-uk-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArchlightUkServersKeywordPage />;
}
