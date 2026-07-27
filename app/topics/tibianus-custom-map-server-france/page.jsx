import TibianusCustomMapServerFranceKeywordPage, { generateMetadata } from './tibianus-custom-map-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusCustomMapServerFranceKeywordPage />;
}
