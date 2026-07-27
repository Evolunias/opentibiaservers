import ElderaCustomMapServersFranceKeywordPage, { generateMetadata } from './eldera-custom-map-servers-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaCustomMapServersFranceKeywordPage />;
}
