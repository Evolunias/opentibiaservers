import OpenTibiaServersListKeywordPage, { generateMetadata } from './open-tibia-servers-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OpenTibiaServersListKeywordPage />;
}
