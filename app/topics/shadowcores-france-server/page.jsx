import ShadowcoresFranceServerKeywordPage, { generateMetadata } from './shadowcores-france-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowcoresFranceServerKeywordPage />;
}
