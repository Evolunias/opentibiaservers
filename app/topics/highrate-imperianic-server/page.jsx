import HighrateImperianicServerKeywordPage, { generateMetadata } from './highrate-imperianic-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateImperianicServerKeywordPage />;
}
