import FreshStartServerFranceKeywordPage, { generateMetadata } from './fresh-start-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartServerFranceKeywordPage />;
}
