import OtservlistAlternativeActiveKeywordPage, { generateMetadata } from './otservlist-alternative-active';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtservlistAlternativeActiveKeywordPage />;
}
