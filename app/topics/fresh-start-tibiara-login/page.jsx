import FreshStartTibiaraLoginKeywordPage, { generateMetadata } from './fresh-start-tibiara-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibiaraLoginKeywordPage />;
}
