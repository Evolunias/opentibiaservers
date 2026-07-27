import HighrateSaintsotWebsiteKeywordPage, { generateMetadata } from './highrate-saintsot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateSaintsotWebsiteKeywordPage />;
}
