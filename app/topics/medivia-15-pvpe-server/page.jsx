import Medivia15PvpeServerKeywordPage, { generateMetadata } from './medivia-15-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia15PvpeServerKeywordPage />;
}
