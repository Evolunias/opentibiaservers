import OfficialArchlightTibiaKeywordPage, { generateMetadata } from './official-archlight-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialArchlightTibiaKeywordPage />;
}
