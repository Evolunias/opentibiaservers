import UnlineCustomMapServerFranceKeywordPage, { generateMetadata } from './unline-custom-map-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineCustomMapServerFranceKeywordPage />;
}
