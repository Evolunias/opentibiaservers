import HighrateClassicusServerKeywordPage, { generateMetadata } from './highrate-classicus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateClassicusServerKeywordPage />;
}
