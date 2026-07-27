import NoxiousotMapKeywordPage, { generateMetadata } from './noxiousot-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoxiousotMapKeywordPage />;
}
