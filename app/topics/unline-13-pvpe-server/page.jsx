import Unline13PvpeServerKeywordPage, { generateMetadata } from './unline-13-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Unline13PvpeServerKeywordPage />;
}
