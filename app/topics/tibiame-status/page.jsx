import TibiameStatusKeywordPage, { generateMetadata } from './tibiame-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameStatusKeywordPage />;
}
