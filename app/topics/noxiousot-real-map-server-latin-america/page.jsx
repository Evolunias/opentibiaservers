import NoxiousotRealMapServerLatinAmericaKeywordPage, { generateMetadata } from './noxiousot-real-map-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoxiousotRealMapServerLatinAmericaKeywordPage />;
}
