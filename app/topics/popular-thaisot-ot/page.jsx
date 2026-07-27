import PopularThaisotOtKeywordPage, { generateMetadata } from './popular-thaisot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularThaisotOtKeywordPage />;
}
