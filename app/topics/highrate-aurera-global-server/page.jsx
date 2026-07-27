import HighrateAureraGlobalServerKeywordPage, { generateMetadata } from './highrate-aurera-global-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateAureraGlobalServerKeywordPage />;
}
