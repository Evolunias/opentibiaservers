import CustomMapOpenTibiaServerCanadaKeywordPage, { generateMetadata } from './custom-map-open-tibia-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapOpenTibiaServerCanadaKeywordPage />;
}
