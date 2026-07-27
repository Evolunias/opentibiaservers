import BaiakServer2026KeywordPage, { generateMetadata } from './baiak-server-2026';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakServer2026KeywordPage />;
}
