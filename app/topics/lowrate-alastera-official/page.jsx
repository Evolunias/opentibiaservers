import LowrateAlasteraOfficialKeywordPage, { generateMetadata } from './lowrate-alastera-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateAlasteraOfficialKeywordPage />;
}
