import BaiakGuideFranceKeywordPage, { generateMetadata } from './baiak-guide-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakGuideFranceKeywordPage />;
}
