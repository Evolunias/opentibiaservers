import HighrateTibiascapeOfficialKeywordPage, { generateMetadata } from './highrate-tibiascape-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiascapeOfficialKeywordPage />;
}
