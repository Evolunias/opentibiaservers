import FreshStartServerListFranceKeywordPage, { generateMetadata } from './fresh-start-server-list-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartServerListFranceKeywordPage />;
}
