import HighrateNepreniaOtServerKeywordPage, { generateMetadata } from './highrate-neprenia-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateNepreniaOtServerKeywordPage />;
}
