import HighrateImperianicOtKeywordPage, { generateMetadata } from './highrate-imperianic-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateImperianicOtKeywordPage />;
}
