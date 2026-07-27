import WithActivePlayersCyntaraServerKeywordPage, { generateMetadata } from './with-active-players-cyntara-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersCyntaraServerKeywordPage />;
}
