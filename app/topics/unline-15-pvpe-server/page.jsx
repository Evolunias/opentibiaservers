import Unline15PvpeServerKeywordPage, { generateMetadata } from './unline-15-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Unline15PvpeServerKeywordPage />;
}
