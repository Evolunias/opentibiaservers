import NoxiousotCanadaServersKeywordPage, { generateMetadata } from './noxiousot-canada-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoxiousotCanadaServersKeywordPage />;
}
