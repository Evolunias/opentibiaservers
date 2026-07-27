import HighrateThaisotKeywordPage, { generateMetadata } from './highrate-thaisot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateThaisotKeywordPage />;
}
