import RealeraCustomMapServerUkKeywordPage, { generateMetadata } from './realera-custom-map-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraCustomMapServerUkKeywordPage />;
}
