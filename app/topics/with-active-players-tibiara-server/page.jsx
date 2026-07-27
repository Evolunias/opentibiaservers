import WithActivePlayersTibiaraServerKeywordPage, { generateMetadata } from './with-active-players-tibiara-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersTibiaraServerKeywordPage />;
}
