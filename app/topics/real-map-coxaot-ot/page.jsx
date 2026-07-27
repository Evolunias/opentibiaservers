import RealMapCoxaotOtKeywordPage, { generateMetadata } from './real-map-coxaot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapCoxaotOtKeywordPage />;
}
