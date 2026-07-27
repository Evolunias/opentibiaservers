import NoxiousotGermanyServerKeywordPage, { generateMetadata } from './noxiousot-germany-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoxiousotGermanyServerKeywordPage />;
}
