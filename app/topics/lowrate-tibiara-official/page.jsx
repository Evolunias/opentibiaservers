import LowrateTibiaraOfficialKeywordPage, { generateMetadata } from './lowrate-tibiara-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiaraOfficialKeywordPage />;
}
