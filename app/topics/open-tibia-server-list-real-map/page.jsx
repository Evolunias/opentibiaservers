import OpenTibiaServerListRealMapKeywordPage, { generateMetadata } from './open-tibia-server-list-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OpenTibiaServerListRealMapKeywordPage />;
}
