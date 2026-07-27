import RealMapClassicusOtsKeywordPage, { generateMetadata } from './real-map-classicus-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapClassicusOtsKeywordPage />;
}
