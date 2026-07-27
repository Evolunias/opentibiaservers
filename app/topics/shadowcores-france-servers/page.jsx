import ShadowcoresFranceServersKeywordPage, { generateMetadata } from './shadowcores-france-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowcoresFranceServersKeywordPage />;
}
