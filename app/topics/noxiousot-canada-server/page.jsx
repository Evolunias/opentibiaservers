import NoxiousotCanadaServerKeywordPage, { generateMetadata } from './noxiousot-canada-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoxiousotCanadaServerKeywordPage />;
}
