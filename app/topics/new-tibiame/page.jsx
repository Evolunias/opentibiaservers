import NewTibiameKeywordPage, { generateMetadata } from './new-tibiame';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiameKeywordPage />;
}
