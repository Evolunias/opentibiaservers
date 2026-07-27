import BestTibiaCustomServerKeywordPage, { generateMetadata } from './best-tibia-custom-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiaCustomServerKeywordPage />;
}
