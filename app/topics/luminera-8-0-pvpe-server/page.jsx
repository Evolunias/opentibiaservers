import Luminera80PvpeServerKeywordPage, { generateMetadata } from './luminera-8-0-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera80PvpeServerKeywordPage />;
}
