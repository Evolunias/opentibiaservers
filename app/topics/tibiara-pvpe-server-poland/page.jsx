import TibiaraPvpeServerPolandKeywordPage, { generateMetadata } from './tibiara-pvpe-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraPvpeServerPolandKeywordPage />;
}
