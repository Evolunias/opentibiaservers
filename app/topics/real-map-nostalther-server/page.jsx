import RealMapNostaltherServerKeywordPage, { generateMetadata } from './real-map-nostalther-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapNostaltherServerKeywordPage />;
}
