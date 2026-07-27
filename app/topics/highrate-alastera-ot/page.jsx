import HighrateAlasteraOtKeywordPage, { generateMetadata } from './highrate-alastera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateAlasteraOtKeywordPage />;
}
