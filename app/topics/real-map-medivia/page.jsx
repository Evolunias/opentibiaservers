import RealMapMediviaKeywordPage, { generateMetadata } from './real-map-medivia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapMediviaKeywordPage />;
}
