import EmpirebrRealMapServersFranceKeywordPage, { generateMetadata } from './empirebr-real-map-servers-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EmpirebrRealMapServersFranceKeywordPage />;
}
