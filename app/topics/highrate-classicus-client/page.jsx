import HighrateClassicusClientKeywordPage, { generateMetadata } from './highrate-classicus-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateClassicusClientKeywordPage />;
}
