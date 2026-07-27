import RealMapNilotClientKeywordPage, { generateMetadata } from './real-map-nilot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapNilotClientKeywordPage />;
}
