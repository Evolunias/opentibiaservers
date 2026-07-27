import OtservlistAlternativePolandKeywordPage, { generateMetadata } from './otservlist-alternative-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtservlistAlternativePolandKeywordPage />;
}
