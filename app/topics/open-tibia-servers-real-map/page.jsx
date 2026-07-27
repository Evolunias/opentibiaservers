import OpenTibiaServersRealMapKeywordPage, { generateMetadata } from './open-tibia-servers-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OpenTibiaServersRealMapKeywordPage />;
}
