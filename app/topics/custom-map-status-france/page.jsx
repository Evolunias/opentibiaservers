import CustomMapStatusFranceKeywordPage, { generateMetadata } from './custom-map-status-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapStatusFranceKeywordPage />;
}
