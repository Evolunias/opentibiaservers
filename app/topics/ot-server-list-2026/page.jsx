import OtServerList2026KeywordPage, { generateMetadata } from './ot-server-list-2026';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtServerList2026KeywordPage />;
}
