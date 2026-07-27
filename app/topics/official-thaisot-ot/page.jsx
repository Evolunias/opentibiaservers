import OfficialThaisotOtKeywordPage, { generateMetadata } from './official-thaisot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialThaisotOtKeywordPage />;
}
