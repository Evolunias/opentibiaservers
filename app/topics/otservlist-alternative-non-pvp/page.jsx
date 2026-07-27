import OtservlistAlternativeNonPvpKeywordPage, { generateMetadata } from './otservlist-alternative-non-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtservlistAlternativeNonPvpKeywordPage />;
}
