import TibiaoriginsFranceServersKeywordPage, { generateMetadata } from './tibiaorigins-france-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaoriginsFranceServersKeywordPage />;
}
