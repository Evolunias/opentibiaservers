import OtservlistEuropeKeywordPage, { generateMetadata } from './otservlist-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtservlistEuropeKeywordPage />;
}
