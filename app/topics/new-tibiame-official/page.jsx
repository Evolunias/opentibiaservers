import NewTibiameOfficialKeywordPage, { generateMetadata } from './new-tibiame-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiameOfficialKeywordPage />;
}
