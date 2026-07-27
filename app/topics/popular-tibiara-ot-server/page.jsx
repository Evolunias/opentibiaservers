import PopularTibiaraOtServerKeywordPage, { generateMetadata } from './popular-tibiara-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiaraOtServerKeywordPage />;
}
