import AureraGlobalPvpeKeywordPage, { generateMetadata } from './aurera-global-pvpe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobalPvpeKeywordPage />;
}
