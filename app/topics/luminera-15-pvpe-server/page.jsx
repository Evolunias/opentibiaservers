import Luminera15PvpeServerKeywordPage, { generateMetadata } from './luminera-15-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera15PvpeServerKeywordPage />;
}
