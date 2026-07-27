import OlderaSwedenServerKeywordPage, { generateMetadata } from './oldera-sweden-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaSwedenServerKeywordPage />;
}
