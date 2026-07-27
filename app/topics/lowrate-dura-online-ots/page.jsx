import LowrateDuraOnlineOtsKeywordPage, { generateMetadata } from './lowrate-dura-online-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateDuraOnlineOtsKeywordPage />;
}
