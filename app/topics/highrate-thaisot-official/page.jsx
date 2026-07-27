import HighrateThaisotOfficialKeywordPage, { generateMetadata } from './highrate-thaisot-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateThaisotOfficialKeywordPage />;
}
