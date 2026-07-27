import HighrateOxygenotPrivateServerKeywordPage, { generateMetadata } from './highrate-oxygenot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateOxygenotPrivateServerKeywordPage />;
}
