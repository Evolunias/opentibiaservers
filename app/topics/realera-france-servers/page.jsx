import RealeraFranceServersKeywordPage, { generateMetadata } from './realera-france-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraFranceServersKeywordPage />;
}
