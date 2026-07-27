import OpenTibiaServerList2026KeywordPage, { generateMetadata } from './open-tibia-server-list-2026';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OpenTibiaServerList2026KeywordPage />;
}
