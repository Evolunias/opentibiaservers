import HighrateCalmeraOtKeywordPage, { generateMetadata } from './highrate-calmera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateCalmeraOtKeywordPage />;
}
