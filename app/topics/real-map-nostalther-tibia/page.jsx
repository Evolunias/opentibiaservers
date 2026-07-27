import RealMapNostaltherTibiaKeywordPage, { generateMetadata } from './real-map-nostalther-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapNostaltherTibiaKeywordPage />;
}
