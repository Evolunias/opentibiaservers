import RealMapClassicusOtKeywordPage, { generateMetadata } from './real-map-classicus-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapClassicusOtKeywordPage />;
}
