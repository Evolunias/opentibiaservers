import TibianusCanadaServersKeywordPage, { generateMetadata } from './tibianus-canada-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusCanadaServersKeywordPage />;
}
