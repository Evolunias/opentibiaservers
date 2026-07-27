import RealMapCoxaotTibiaKeywordPage, { generateMetadata } from './real-map-coxaot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapCoxaotTibiaKeywordPage />;
}
