import RealeraCustomMapServerSouthAmericaKeywordPage, { generateMetadata } from './realera-custom-map-server-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraCustomMapServerSouthAmericaKeywordPage />;
}
