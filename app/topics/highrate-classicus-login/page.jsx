import HighrateClassicusLoginKeywordPage, { generateMetadata } from './highrate-classicus-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateClassicusLoginKeywordPage />;
}
