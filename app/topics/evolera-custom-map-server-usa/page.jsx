import EvoleraCustomMapServerUsaKeywordPage, { generateMetadata } from './evolera-custom-map-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraCustomMapServerUsaKeywordPage />;
}
