import TibiameWarsKeywordPage, { generateMetadata } from './tibiame-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameWarsKeywordPage />;
}
