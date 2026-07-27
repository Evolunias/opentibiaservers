import TibiameOtKeywordPage, { generateMetadata } from './tibiame-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameOtKeywordPage />;
}
