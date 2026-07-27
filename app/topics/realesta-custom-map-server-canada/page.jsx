import RealestaCustomMapServerCanadaKeywordPage, { generateMetadata } from './realesta-custom-map-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaCustomMapServerCanadaKeywordPage />;
}
