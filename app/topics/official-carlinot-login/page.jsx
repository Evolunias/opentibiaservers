import OfficialCarlinotLoginKeywordPage, { generateMetadata } from './official-carlinot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCarlinotLoginKeywordPage />;
}
