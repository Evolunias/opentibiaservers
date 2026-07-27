import TopTibiaraOtServerKeywordPage, { generateMetadata } from './top-tibiara-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiaraOtServerKeywordPage />;
}
