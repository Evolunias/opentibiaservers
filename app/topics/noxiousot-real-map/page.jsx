import NoxiousotRealMapKeywordPage, { generateMetadata } from './noxiousot-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoxiousotRealMapKeywordPage />;
}
