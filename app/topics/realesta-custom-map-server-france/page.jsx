import RealestaCustomMapServerFranceKeywordPage, { generateMetadata } from './realesta-custom-map-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaCustomMapServerFranceKeywordPage />;
}
