import TibiaraFranceServerKeywordPage, { generateMetadata } from './tibiara-france-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraFranceServerKeywordPage />;
}
