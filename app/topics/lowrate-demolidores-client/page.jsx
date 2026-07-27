import LowrateDemolidoresClientKeywordPage, { generateMetadata } from './lowrate-demolidores-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateDemolidoresClientKeywordPage />;
}
