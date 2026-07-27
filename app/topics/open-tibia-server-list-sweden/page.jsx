import OpenTibiaServerListSwedenKeywordPage, { generateMetadata } from './open-tibia-server-list-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OpenTibiaServerListSwedenKeywordPage />;
}
