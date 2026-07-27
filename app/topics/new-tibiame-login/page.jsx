import NewTibiameLoginKeywordPage, { generateMetadata } from './new-tibiame-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiameLoginKeywordPage />;
}
