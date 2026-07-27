import RealeraCustomMapServerArgentinaKeywordPage, { generateMetadata } from './realera-custom-map-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraCustomMapServerArgentinaKeywordPage />;
}
