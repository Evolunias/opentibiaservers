import LowrateSaintsotWebsiteKeywordPage, { generateMetadata } from './lowrate-saintsot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateSaintsotWebsiteKeywordPage />;
}
