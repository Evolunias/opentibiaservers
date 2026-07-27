import RealestaCustomMapServerLatinAmericaKeywordPage, { generateMetadata } from './realesta-custom-map-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaCustomMapServerLatinAmericaKeywordPage />;
}
