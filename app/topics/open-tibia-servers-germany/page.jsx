import OpenTibiaServersGermanyKeywordPage, { generateMetadata } from './open-tibia-servers-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OpenTibiaServersGermanyKeywordPage />;
}
