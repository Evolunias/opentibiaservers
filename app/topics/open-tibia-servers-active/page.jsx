import OpenTibiaServersActiveKeywordPage, { generateMetadata } from './open-tibia-servers-active';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OpenTibiaServersActiveKeywordPage />;
}
