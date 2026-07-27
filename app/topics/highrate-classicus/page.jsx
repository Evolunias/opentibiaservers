import HighrateClassicusKeywordPage, { generateMetadata } from './highrate-classicus';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateClassicusKeywordPage />;
}
