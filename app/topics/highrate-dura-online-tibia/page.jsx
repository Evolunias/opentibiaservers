import HighrateDuraOnlineTibiaKeywordPage, { generateMetadata } from './highrate-dura-online-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateDuraOnlineTibiaKeywordPage />;
}
