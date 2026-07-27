import RealMapNostaltherClientKeywordPage, { generateMetadata } from './real-map-nostalther-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapNostaltherClientKeywordPage />;
}
