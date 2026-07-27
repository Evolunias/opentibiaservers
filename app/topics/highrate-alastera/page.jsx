import HighrateAlasteraKeywordPage, { generateMetadata } from './highrate-alastera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateAlasteraKeywordPage />;
}
