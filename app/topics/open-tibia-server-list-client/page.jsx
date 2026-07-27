import OpenTibiaServerListClientKeywordPage, { generateMetadata } from './open-tibia-server-list-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OpenTibiaServerListClientKeywordPage />;
}
