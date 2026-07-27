import OtservlistGermanyKeywordPage, { generateMetadata } from './otservlist-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtservlistGermanyKeywordPage />;
}
