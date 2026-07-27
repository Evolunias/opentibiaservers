import Luminera11PvpeServerKeywordPage, { generateMetadata } from './luminera-11-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera11PvpeServerKeywordPage />;
}
