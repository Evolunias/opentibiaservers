import HighrateAureraGlobalKeywordPage, { generateMetadata } from './highrate-aurera-global';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateAureraGlobalKeywordPage />;
}
