import PvpeGuideFranceKeywordPage, { generateMetadata } from './pvpe-guide-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeGuideFranceKeywordPage />;
}
