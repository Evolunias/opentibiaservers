import BlazeraRetroServerSouthAmericaKeywordPage, { generateMetadata } from './blazera-retro-server-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraRetroServerSouthAmericaKeywordPage />;
}
