import Luminera14PvpeServerKeywordPage, { generateMetadata } from './luminera-14-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera14PvpeServerKeywordPage />;
}
