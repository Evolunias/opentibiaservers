import OlderaSwedenServersKeywordPage, { generateMetadata } from './oldera-sweden-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaSwedenServersKeywordPage />;
}
