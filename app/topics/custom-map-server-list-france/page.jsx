import CustomMapServerListFranceKeywordPage, { generateMetadata } from './custom-map-server-list-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapServerListFranceKeywordPage />;
}
