import Tibijka11PvpeServerKeywordPage, { generateMetadata } from './tibijka-11-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka11PvpeServerKeywordPage />;
}
