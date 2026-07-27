import TibiaPrivateServerListKeywordPage, { generateMetadata } from './tibia-private-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaPrivateServerListKeywordPage />;
}
