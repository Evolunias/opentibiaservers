import OfficialArchlightOpenTibiaKeywordPage, { generateMetadata } from './official-archlight-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialArchlightOpenTibiaKeywordPage />;
}
