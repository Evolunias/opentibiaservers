import OfficialCarlinotKeywordPage, { generateMetadata } from './official-carlinot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCarlinotKeywordPage />;
}
