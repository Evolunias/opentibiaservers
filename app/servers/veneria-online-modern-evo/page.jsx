import VeneriaOnlineModernEvoServerReviewPage, { generateMetadata } from './veneria-online-modern-evo';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VeneriaOnlineModernEvoServerReviewPage />;
}
