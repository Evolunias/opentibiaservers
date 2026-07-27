import EvoleraCustomMapServerPolandKeywordPage, { generateMetadata } from './evolera-custom-map-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraCustomMapServerPolandKeywordPage />;
}
