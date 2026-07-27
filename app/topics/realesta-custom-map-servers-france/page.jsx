import RealestaCustomMapServersFranceKeywordPage, { generateMetadata } from './realesta-custom-map-servers-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaCustomMapServersFranceKeywordPage />;
}
