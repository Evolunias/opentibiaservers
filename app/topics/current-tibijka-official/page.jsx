import CurrentTibijkaOfficialKeywordPage, { generateMetadata } from './current-tibijka-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibijkaOfficialKeywordPage />;
}
