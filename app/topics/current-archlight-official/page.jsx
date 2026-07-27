import CurrentArchlightOfficialKeywordPage, { generateMetadata } from './current-archlight-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentArchlightOfficialKeywordPage />;
}
