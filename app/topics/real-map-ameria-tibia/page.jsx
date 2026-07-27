import RealMapAmeriaTibiaKeywordPage, { generateMetadata } from './real-map-ameria-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapAmeriaTibiaKeywordPage />;
}
