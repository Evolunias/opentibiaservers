import RealMapOpenTibiaServerPolandKeywordPage, { generateMetadata } from './real-map-open-tibia-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapOpenTibiaServerPolandKeywordPage />;
}
