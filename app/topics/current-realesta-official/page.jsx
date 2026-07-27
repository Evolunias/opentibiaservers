import CurrentRealestaOfficialKeywordPage, { generateMetadata } from './current-realesta-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentRealestaOfficialKeywordPage />;
}
