import PrestigeImperiaServerReviewPage, { generateMetadata } from './prestige-imperia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PrestigeImperiaServerReviewPage />;
}
