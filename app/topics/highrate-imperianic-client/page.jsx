import HighrateImperianicClientKeywordPage, { generateMetadata } from './highrate-imperianic-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateImperianicClientKeywordPage />;
}
