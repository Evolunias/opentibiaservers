import Midhem15PvpeServerKeywordPage, { generateMetadata } from './midhem-15-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem15PvpeServerKeywordPage />;
}
