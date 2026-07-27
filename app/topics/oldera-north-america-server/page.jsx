import OlderaNorthAmericaServerKeywordPage, { generateMetadata } from './oldera-north-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaNorthAmericaServerKeywordPage />;
}
