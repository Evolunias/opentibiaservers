import CurrentTibiaraLoginKeywordPage, { generateMetadata } from './current-tibiara-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiaraLoginKeywordPage />;
}
