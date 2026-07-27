import OlderaChileServerKeywordPage, { generateMetadata } from './oldera-chile-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaChileServerKeywordPage />;
}
