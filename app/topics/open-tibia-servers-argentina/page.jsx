import OpenTibiaServersArgentinaKeywordPage, { generateMetadata } from './open-tibia-servers-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OpenTibiaServersArgentinaKeywordPage />;
}
