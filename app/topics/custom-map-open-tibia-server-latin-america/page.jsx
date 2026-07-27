import CustomMapOpenTibiaServerLatinAmericaKeywordPage, { generateMetadata } from './custom-map-open-tibia-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapOpenTibiaServerLatinAmericaKeywordPage />;
}
