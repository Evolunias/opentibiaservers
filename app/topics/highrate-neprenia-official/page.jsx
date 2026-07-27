import HighrateNepreniaOfficialKeywordPage, { generateMetadata } from './highrate-neprenia-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateNepreniaOfficialKeywordPage />;
}
