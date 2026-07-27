import RealMapOpenTibiaServerUkKeywordPage, { generateMetadata } from './real-map-open-tibia-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapOpenTibiaServerUkKeywordPage />;
}
