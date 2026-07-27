import CustomMapOpenTibiaServerFranceKeywordPage, { generateMetadata } from './custom-map-open-tibia-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapOpenTibiaServerFranceKeywordPage />;
}
