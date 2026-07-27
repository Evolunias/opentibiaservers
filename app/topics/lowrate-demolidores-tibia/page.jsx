import LowrateDemolidoresTibiaKeywordPage, { generateMetadata } from './lowrate-demolidores-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateDemolidoresTibiaKeywordPage />;
}
