import TibiaPrivateServer2026KeywordPage, { generateMetadata } from './tibia-private-server-2026';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaPrivateServer2026KeywordPage />;
}
