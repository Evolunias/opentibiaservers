import LowrateDemolidoresKeywordPage, { generateMetadata } from './lowrate-demolidores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateDemolidoresKeywordPage />;
}
