import HighrateAlasteraOfficialKeywordPage, { generateMetadata } from './highrate-alastera-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateAlasteraOfficialKeywordPage />;
}
