import PvpGuideCanadaKeywordPage, { generateMetadata } from './pvp-guide-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpGuideCanadaKeywordPage />;
}
