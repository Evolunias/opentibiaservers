import EvoleraCustomMapServersFranceKeywordPage, { generateMetadata } from './evolera-custom-map-servers-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraCustomMapServersFranceKeywordPage />;
}
