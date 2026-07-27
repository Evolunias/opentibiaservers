import OlderaArgentinaServerKeywordPage, { generateMetadata } from './oldera-argentina-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaArgentinaServerKeywordPage />;
}
