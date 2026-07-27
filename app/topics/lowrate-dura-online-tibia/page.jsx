import LowrateDuraOnlineTibiaKeywordPage, { generateMetadata } from './lowrate-dura-online-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateDuraOnlineTibiaKeywordPage />;
}
