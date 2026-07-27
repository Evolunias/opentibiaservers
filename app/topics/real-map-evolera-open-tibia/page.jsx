import RealMapEvoleraOpenTibiaKeywordPage, { generateMetadata } from './real-map-evolera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapEvoleraOpenTibiaKeywordPage />;
}
