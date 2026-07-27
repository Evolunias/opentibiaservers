import OfficialCarlinotOtServerKeywordPage, { generateMetadata } from './official-carlinot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCarlinotOtServerKeywordPage />;
}
