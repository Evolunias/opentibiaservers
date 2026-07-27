import NewTibiameOtKeywordPage, { generateMetadata } from './new-tibiame-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiameOtKeywordPage />;
}
