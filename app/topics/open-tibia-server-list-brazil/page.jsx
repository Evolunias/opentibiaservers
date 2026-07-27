import OpenTibiaServerListBrazilKeywordPage, { generateMetadata } from './open-tibia-server-list-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OpenTibiaServerListBrazilKeywordPage />;
}
