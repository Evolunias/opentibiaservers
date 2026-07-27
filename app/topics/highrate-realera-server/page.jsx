import HighrateRealeraServerKeywordPage, { generateMetadata } from './highrate-realera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateRealeraServerKeywordPage />;
}
