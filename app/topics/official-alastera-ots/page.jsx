import OfficialAlasteraOtsKeywordPage, { generateMetadata } from './official-alastera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialAlasteraOtsKeywordPage />;
}
