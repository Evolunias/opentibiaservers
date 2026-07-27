import HighrateNepreniaLoginKeywordPage, { generateMetadata } from './highrate-neprenia-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateNepreniaLoginKeywordPage />;
}
