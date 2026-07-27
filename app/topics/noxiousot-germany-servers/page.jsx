import NoxiousotGermanyServersKeywordPage, { generateMetadata } from './noxiousot-germany-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoxiousotGermanyServersKeywordPage />;
}
