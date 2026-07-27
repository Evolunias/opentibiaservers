import HighrateImperianicPrivateServerKeywordPage, { generateMetadata } from './highrate-imperianic-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateImperianicPrivateServerKeywordPage />;
}
