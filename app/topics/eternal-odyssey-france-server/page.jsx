import EternalOdysseyFranceServerKeywordPage, { generateMetadata } from './eternal-odyssey-france-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EternalOdysseyFranceServerKeywordPage />;
}
