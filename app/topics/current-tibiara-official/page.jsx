import CurrentTibiaraOfficialKeywordPage, { generateMetadata } from './current-tibiara-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiaraOfficialKeywordPage />;
}
