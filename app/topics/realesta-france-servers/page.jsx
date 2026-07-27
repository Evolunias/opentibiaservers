import RealestaFranceServersKeywordPage, { generateMetadata } from './realesta-france-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaFranceServersKeywordPage />;
}
