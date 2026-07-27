import OtservlistAlternativeClientKeywordPage, { generateMetadata } from './otservlist-alternative-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtservlistAlternativeClientKeywordPage />;
}
