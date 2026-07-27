import HighrateAlasteraOtServerKeywordPage, { generateMetadata } from './highrate-alastera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateAlasteraOtServerKeywordPage />;
}
