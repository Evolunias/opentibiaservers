import OpenTibiaServerListPolandKeywordPage, { generateMetadata } from './open-tibia-server-list-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OpenTibiaServerListPolandKeywordPage />;
}
