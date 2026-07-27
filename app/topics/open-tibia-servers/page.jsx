import OpenTibiaServersKeywordPage, { generateMetadata } from './open-tibia-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OpenTibiaServersKeywordPage />;
}
