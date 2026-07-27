import RealeraFranceServerKeywordPage, { generateMetadata } from './realera-france-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraFranceServerKeywordPage />;
}
