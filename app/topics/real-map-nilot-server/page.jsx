import RealMapNilotServerKeywordPage, { generateMetadata } from './real-map-nilot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapNilotServerKeywordPage />;
}
