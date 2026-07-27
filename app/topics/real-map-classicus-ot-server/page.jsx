import RealMapClassicusOtServerKeywordPage, { generateMetadata } from './real-map-classicus-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapClassicusOtServerKeywordPage />;
}
