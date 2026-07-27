import CurrentThaisotOfficialKeywordPage, { generateMetadata } from './current-thaisot-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentThaisotOfficialKeywordPage />;
}
