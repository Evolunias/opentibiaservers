import HighrateThaisotLoginKeywordPage, { generateMetadata } from './highrate-thaisot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateThaisotLoginKeywordPage />;
}
