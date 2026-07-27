import NewTibiameServerKeywordPage, { generateMetadata } from './new-tibiame-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiameServerKeywordPage />;
}
