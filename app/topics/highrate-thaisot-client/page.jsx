import HighrateThaisotClientKeywordPage, { generateMetadata } from './highrate-thaisot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateThaisotClientKeywordPage />;
}
