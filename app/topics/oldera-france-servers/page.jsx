import OlderaFranceServersKeywordPage, { generateMetadata } from './oldera-france-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaFranceServersKeywordPage />;
}
