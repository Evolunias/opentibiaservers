import HighrateTibiaraLoginKeywordPage, { generateMetadata } from './highrate-tibiara-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiaraLoginKeywordPage />;
}
