import CurrentVenoreotOfficialKeywordPage, { generateMetadata } from './current-venoreot-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentVenoreotOfficialKeywordPage />;
}
