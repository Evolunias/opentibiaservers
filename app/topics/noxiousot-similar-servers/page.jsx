import NoxiousotSimilarServersKeywordPage, { generateMetadata } from './noxiousot-similar-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoxiousotSimilarServersKeywordPage />;
}
