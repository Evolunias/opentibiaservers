import Luminera12PvpeServerKeywordPage, { generateMetadata } from './luminera-12-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera12PvpeServerKeywordPage />;
}
