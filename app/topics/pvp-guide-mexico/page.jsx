import PvpGuideMexicoKeywordPage, { generateMetadata } from './pvp-guide-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpGuideMexicoKeywordPage />;
}
