import NewThaisotOfficialKeywordPage, { generateMetadata } from './new-thaisot-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewThaisotOfficialKeywordPage />;
}
