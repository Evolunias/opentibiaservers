import OpenTibiaServersPolandKeywordPage, { generateMetadata } from './open-tibia-servers-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OpenTibiaServersPolandKeywordPage />;
}
