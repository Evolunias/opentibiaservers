import RealeraCustomMapServersMexicoKeywordPage, { generateMetadata } from './realera-custom-map-servers-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraCustomMapServersMexicoKeywordPage />;
}
