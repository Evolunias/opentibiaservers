import OpenTibiaServersClientKeywordPage, { generateMetadata } from './open-tibia-servers-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OpenTibiaServersClientKeywordPage />;
}
