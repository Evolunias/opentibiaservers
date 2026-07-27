import ArchlightHighExpKeywordPage, { generateMetadata } from './archlight-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArchlightHighExpKeywordPage />;
}
