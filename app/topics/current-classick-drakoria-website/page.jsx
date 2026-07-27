import CurrentClassickDrakoriaWebsiteKeywordPage, { generateMetadata } from './current-classick-drakoria-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentClassickDrakoriaWebsiteKeywordPage />;
}
