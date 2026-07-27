import OpenTibiaServerListKeywordPage, { generateMetadata } from './open-tibia-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OpenTibiaServerListKeywordPage />;
}
