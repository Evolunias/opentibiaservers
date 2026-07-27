import NewTibiameClientKeywordPage, { generateMetadata } from './new-tibiame-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiameClientKeywordPage />;
}
