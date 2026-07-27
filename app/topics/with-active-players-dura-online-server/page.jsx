import WithActivePlayersDuraOnlineServerKeywordPage, { generateMetadata } from './with-active-players-dura-online-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersDuraOnlineServerKeywordPage />;
}
