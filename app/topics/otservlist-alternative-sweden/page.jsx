import OtservlistAlternativeSwedenKeywordPage, { generateMetadata } from './otservlist-alternative-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtservlistAlternativeSwedenKeywordPage />;
}
