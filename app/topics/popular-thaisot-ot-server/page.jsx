import PopularThaisotOtServerKeywordPage, { generateMetadata } from './popular-thaisot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularThaisotOtServerKeywordPage />;
}
