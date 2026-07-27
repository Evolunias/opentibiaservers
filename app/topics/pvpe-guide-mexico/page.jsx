import PvpeGuideMexicoKeywordPage, { generateMetadata } from './pvpe-guide-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeGuideMexicoKeywordPage />;
}
