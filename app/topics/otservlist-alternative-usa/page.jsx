import OtservlistAlternativeUsaKeywordPage, { generateMetadata } from './otservlist-alternative-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtservlistAlternativeUsaKeywordPage />;
}
