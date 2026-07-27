import CustomMapOtServerFranceKeywordPage, { generateMetadata } from './custom-map-ot-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapOtServerFranceKeywordPage />;
}
