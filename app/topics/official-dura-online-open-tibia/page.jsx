import OfficialDuraOnlineOpenTibiaKeywordPage, { generateMetadata } from './official-dura-online-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialDuraOnlineOpenTibiaKeywordPage />;
}
