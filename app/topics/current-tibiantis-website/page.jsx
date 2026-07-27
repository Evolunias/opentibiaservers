import CurrentTibiantisWebsiteKeywordPage, { generateMetadata } from './current-tibiantis-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiantisWebsiteKeywordPage />;
}
