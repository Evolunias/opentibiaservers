import RealMapCoxaotClientKeywordPage, { generateMetadata } from './real-map-coxaot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapCoxaotClientKeywordPage />;
}
