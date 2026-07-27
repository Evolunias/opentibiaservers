import TibiaOtServerSouthAmericaKeywordPage, { generateMetadata } from './tibia-ot-server-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaOtServerSouthAmericaKeywordPage />;
}
