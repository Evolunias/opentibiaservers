import OfficialAlasteraOtKeywordPage, { generateMetadata } from './official-alastera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialAlasteraOtKeywordPage />;
}
