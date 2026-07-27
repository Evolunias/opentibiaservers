import HighrateDemolidoresTibiaKeywordPage, { generateMetadata } from './highrate-demolidores-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateDemolidoresTibiaKeywordPage />;
}
