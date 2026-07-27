import CustomMapClientFranceKeywordPage, { generateMetadata } from './custom-map-client-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapClientFranceKeywordPage />;
}
