import CurrentTibiameOfficialKeywordPage, { generateMetadata } from './current-tibiame-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiameOfficialKeywordPage />;
}
