import HighrateNepreniaOtKeywordPage, { generateMetadata } from './highrate-neprenia-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateNepreniaOtKeywordPage />;
}
