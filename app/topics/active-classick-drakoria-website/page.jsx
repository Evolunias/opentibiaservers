import ActiveClassickDrakoriaWebsiteKeywordPage, { generateMetadata } from './active-classick-drakoria-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveClassickDrakoriaWebsiteKeywordPage />;
}
