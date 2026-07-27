import TopThaisotOfficialKeywordPage, { generateMetadata } from './top-thaisot-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopThaisotOfficialKeywordPage />;
}
