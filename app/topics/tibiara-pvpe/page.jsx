import TibiaraPvpeKeywordPage, { generateMetadata } from './tibiara-pvpe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraPvpeKeywordPage />;
}
