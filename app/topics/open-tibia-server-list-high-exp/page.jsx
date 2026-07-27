import OpenTibiaServerListHighExpKeywordPage, { generateMetadata } from './open-tibia-server-list-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OpenTibiaServerListHighExpKeywordPage />;
}
