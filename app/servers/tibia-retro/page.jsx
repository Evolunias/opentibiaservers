import TibiaRetroServerReviewPage, { generateMetadata } from './tibia-retro';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaRetroServerReviewPage />;
}
