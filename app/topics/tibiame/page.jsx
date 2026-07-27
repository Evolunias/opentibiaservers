import TibiameKeywordPage, { generateMetadata } from './tibiame';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameKeywordPage />;
}
