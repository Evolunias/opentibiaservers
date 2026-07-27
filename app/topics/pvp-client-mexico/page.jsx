import PvpClientMexicoKeywordPage, { generateMetadata } from './pvp-client-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpClientMexicoKeywordPage />;
}
