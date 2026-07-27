import RealMapClassicusServersKeywordPage, { generateMetadata } from './real-map-classicus-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapClassicusServersKeywordPage />;
}
