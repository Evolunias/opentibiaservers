import OtservlistAlternativeRealMapKeywordPage, { generateMetadata } from './otservlist-alternative-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtservlistAlternativeRealMapKeywordPage />;
}
