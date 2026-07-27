import LowrateDuraOnlineOpenTibiaKeywordPage, { generateMetadata } from './lowrate-dura-online-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateDuraOnlineOpenTibiaKeywordPage />;
}
