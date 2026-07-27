import FreshStartServersFranceKeywordPage, { generateMetadata } from './fresh-start-servers-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartServersFranceKeywordPage />;
}
