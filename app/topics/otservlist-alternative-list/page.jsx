import OtservlistAlternativeListKeywordPage, { generateMetadata } from './otservlist-alternative-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtservlistAlternativeListKeywordPage />;
}
