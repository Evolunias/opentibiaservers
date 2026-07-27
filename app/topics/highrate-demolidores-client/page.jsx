import HighrateDemolidoresClientKeywordPage, { generateMetadata } from './highrate-demolidores-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateDemolidoresClientKeywordPage />;
}
