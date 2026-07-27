import TibiaoriginsFranceServerKeywordPage, { generateMetadata } from './tibiaorigins-france-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaoriginsFranceServerKeywordPage />;
}
