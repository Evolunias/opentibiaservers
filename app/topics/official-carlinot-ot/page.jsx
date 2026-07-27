import OfficialCarlinotOtKeywordPage, { generateMetadata } from './official-carlinot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCarlinotOtKeywordPage />;
}
