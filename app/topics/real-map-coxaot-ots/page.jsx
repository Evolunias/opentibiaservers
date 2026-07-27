import RealMapCoxaotOtsKeywordPage, { generateMetadata } from './real-map-coxaot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapCoxaotOtsKeywordPage />;
}
