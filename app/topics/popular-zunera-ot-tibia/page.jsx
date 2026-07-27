import PopularZuneraOtTibiaKeywordPage, { generateMetadata } from './popular-zunera-ot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularZuneraOtTibiaKeywordPage />;
}
