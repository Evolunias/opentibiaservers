import Classicus96PvpeServerKeywordPage, { generateMetadata } from './classicus-9-6-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus96PvpeServerKeywordPage />;
}
