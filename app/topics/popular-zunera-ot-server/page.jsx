import PopularZuneraOtServerKeywordPage, { generateMetadata } from './popular-zunera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularZuneraOtServerKeywordPage />;
}
