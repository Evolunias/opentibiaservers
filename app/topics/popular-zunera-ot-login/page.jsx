import PopularZuneraOtLoginKeywordPage, { generateMetadata } from './popular-zunera-ot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularZuneraOtLoginKeywordPage />;
}
