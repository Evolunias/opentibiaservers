import BestTibiaraLoginKeywordPage, { generateMetadata } from './best-tibiara-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiaraLoginKeywordPage />;
}
