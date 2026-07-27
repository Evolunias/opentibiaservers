import RealMapNostaltherKeywordPage, { generateMetadata } from './real-map-nostalther';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapNostaltherKeywordPage />;
}
