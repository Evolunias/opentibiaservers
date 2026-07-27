import CarlinotBaiakServerLatinAmericaKeywordPage, { generateMetadata } from './carlinot-baiak-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotBaiakServerLatinAmericaKeywordPage />;
}
