import SoeRpgServerReviewPage, { generateMetadata } from './soe-rpg';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SoeRpgServerReviewPage />;
}
