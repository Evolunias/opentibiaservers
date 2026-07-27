import HighrateCarlinotPrivateServerKeywordPage, { generateMetadata } from './highrate-carlinot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateCarlinotPrivateServerKeywordPage />;
}
