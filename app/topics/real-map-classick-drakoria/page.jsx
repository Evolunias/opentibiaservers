import RealMapClassickDrakoriaKeywordPage, { generateMetadata } from './real-map-classick-drakoria';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapClassickDrakoriaKeywordPage />;
}
