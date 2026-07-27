import CyntaraCustomMapServersFranceKeywordPage, { generateMetadata } from './cyntara-custom-map-servers-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraCustomMapServersFranceKeywordPage />;
}
