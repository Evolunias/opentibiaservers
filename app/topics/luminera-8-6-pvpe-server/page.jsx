import Luminera86PvpeServerKeywordPage, { generateMetadata } from './luminera-8-6-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera86PvpeServerKeywordPage />;
}
