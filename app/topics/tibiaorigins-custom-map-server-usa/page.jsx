import TibiaoriginsCustomMapServerUsaKeywordPage, { generateMetadata } from './tibiaorigins-custom-map-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaoriginsCustomMapServerUsaKeywordPage />;
}
