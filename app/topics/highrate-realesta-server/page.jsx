import HighrateRealestaServerKeywordPage, { generateMetadata } from './highrate-realesta-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateRealestaServerKeywordPage />;
}
