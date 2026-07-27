import CurrentCarlinotOfficialKeywordPage, { generateMetadata } from './current-carlinot-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentCarlinotOfficialKeywordPage />;
}
