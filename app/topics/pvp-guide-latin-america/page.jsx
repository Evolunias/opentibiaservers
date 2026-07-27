import PvpGuideLatinAmericaKeywordPage, { generateMetadata } from './pvp-guide-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpGuideLatinAmericaKeywordPage />;
}
