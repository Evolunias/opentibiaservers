import SabrehavenFranceServersKeywordPage, { generateMetadata } from './sabrehaven-france-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenFranceServersKeywordPage />;
}
