import TibiaraLoginKeywordPage, { generateMetadata } from './tibiara-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraLoginKeywordPage />;
}
