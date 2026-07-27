import RealMapNilotServersKeywordPage, { generateMetadata } from './real-map-nilot-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapNilotServersKeywordPage />;
}
