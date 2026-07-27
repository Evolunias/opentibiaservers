import RealeraCustomMapServerCanadaKeywordPage, { generateMetadata } from './realera-custom-map-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraCustomMapServerCanadaKeywordPage />;
}
