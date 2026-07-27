import OpenTibiaServersNonPvpKeywordPage, { generateMetadata } from './open-tibia-servers-non-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OpenTibiaServersNonPvpKeywordPage />;
}
