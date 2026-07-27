import TopTibiaraOtKeywordPage, { generateMetadata } from './top-tibiara-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiaraOtKeywordPage />;
}
