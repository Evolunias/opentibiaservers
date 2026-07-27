import OlderaUkServerKeywordPage, { generateMetadata } from './oldera-uk-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaUkServerKeywordPage />;
}
