import NoResetSaintsotWebsiteKeywordPage, { generateMetadata } from './no-reset-saintsot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetSaintsotWebsiteKeywordPage />;
}
