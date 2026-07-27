import RookgaardTalesPvpeKeywordPage, { generateMetadata } from './rookgaard-tales-pvpe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTalesPvpeKeywordPage />;
}
