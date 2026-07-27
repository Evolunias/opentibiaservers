import RealestaFranceServerKeywordPage, { generateMetadata } from './realesta-france-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaFranceServerKeywordPage />;
}
