import OtservlistAlternativePvpKeywordPage, { generateMetadata } from './otservlist-alternative-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtservlistAlternativePvpKeywordPage />;
}
