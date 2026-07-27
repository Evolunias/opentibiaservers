import CurrentSaintsotWebsiteKeywordPage, { generateMetadata } from './current-saintsot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentSaintsotWebsiteKeywordPage />;
}
