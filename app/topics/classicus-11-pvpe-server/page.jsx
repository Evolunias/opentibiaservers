import Classicus11PvpeServerKeywordPage, { generateMetadata } from './classicus-11-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus11PvpeServerKeywordPage />;
}
