import OtservlistAlternativeKeywordPage, { generateMetadata } from './otservlist-alternative';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtservlistAlternativeKeywordPage />;
}
