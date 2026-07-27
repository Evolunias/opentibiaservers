import OtServers2026KeywordPage, { generateMetadata } from './ot-servers-2026';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtServers2026KeywordPage />;
}
