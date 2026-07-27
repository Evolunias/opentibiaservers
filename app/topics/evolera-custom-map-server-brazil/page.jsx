import EvoleraCustomMapServerBrazilKeywordPage, { generateMetadata } from './evolera-custom-map-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraCustomMapServerBrazilKeywordPage />;
}
