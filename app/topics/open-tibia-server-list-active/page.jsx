import OpenTibiaServerListActiveKeywordPage, { generateMetadata } from './open-tibia-server-list-active';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OpenTibiaServerListActiveKeywordPage />;
}
