import LowrateTibiaraLoginKeywordPage, { generateMetadata } from './lowrate-tibiara-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiaraLoginKeywordPage />;
}
