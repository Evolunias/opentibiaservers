import HighrateDemolidoresKeywordPage, { generateMetadata } from './highrate-demolidores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateDemolidoresKeywordPage />;
}
