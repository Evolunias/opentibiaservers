import OlderaGermanyServersKeywordPage, { generateMetadata } from './oldera-germany-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaGermanyServersKeywordPage />;
}
