import OpenTibiaServerListGermanyKeywordPage, { generateMetadata } from './open-tibia-server-list-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OpenTibiaServerListGermanyKeywordPage />;
}
