import NoxiousotRealMapServerUsaKeywordPage, { generateMetadata } from './noxiousot-real-map-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoxiousotRealMapServerUsaKeywordPage />;
}
