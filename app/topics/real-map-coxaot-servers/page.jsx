import RealMapCoxaotServersKeywordPage, { generateMetadata } from './real-map-coxaot-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapCoxaotServersKeywordPage />;
}
