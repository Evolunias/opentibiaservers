import Luminera13PvpeServerKeywordPage, { generateMetadata } from './luminera-13-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera13PvpeServerKeywordPage />;
}
