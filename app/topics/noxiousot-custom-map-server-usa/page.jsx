import NoxiousotCustomMapServerUsaKeywordPage, { generateMetadata } from './noxiousot-custom-map-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoxiousotCustomMapServerUsaKeywordPage />;
}
