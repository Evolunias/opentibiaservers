import EvoleraCustomMapServerCanadaKeywordPage, { generateMetadata } from './evolera-custom-map-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraCustomMapServerCanadaKeywordPage />;
}
