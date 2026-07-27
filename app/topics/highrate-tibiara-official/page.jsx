import HighrateTibiaraOfficialKeywordPage, { generateMetadata } from './highrate-tibiara-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiaraOfficialKeywordPage />;
}
