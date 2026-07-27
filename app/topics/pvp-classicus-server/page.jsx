import PvpClassicusServerKeywordPage, { generateMetadata } from './pvp-classicus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpClassicusServerKeywordPage />;
}
