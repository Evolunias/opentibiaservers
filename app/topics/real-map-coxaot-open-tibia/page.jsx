import RealMapCoxaotOpenTibiaKeywordPage, { generateMetadata } from './real-map-coxaot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapCoxaotOpenTibiaKeywordPage />;
}
