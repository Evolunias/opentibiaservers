import ArchlightResetKeywordPage, { generateMetadata } from './archlight-reset';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArchlightResetKeywordPage />;
}
