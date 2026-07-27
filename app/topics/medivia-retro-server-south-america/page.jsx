import MediviaRetroServerSouthAmericaKeywordPage, { generateMetadata } from './medivia-retro-server-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaRetroServerSouthAmericaKeywordPage />;
}
