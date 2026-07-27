import TibiameOfficialKeywordPage, { generateMetadata } from './tibiame-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameOfficialKeywordPage />;
}
