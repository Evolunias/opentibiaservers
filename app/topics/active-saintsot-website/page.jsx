import ActiveSaintsotWebsiteKeywordPage, { generateMetadata } from './active-saintsot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveSaintsotWebsiteKeywordPage />;
}
