import RealeraRetroServerSouthAmericaKeywordPage, { generateMetadata } from './realera-retro-server-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraRetroServerSouthAmericaKeywordPage />;
}
