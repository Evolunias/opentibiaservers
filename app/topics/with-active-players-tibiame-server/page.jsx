import WithActivePlayersTibiameServerKeywordPage, { generateMetadata } from './with-active-players-tibiame-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersTibiameServerKeywordPage />;
}
