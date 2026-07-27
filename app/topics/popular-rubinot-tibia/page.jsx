import PopularRubinotTibiaKeywordPage, { generateMetadata } from './popular-rubinot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRubinotTibiaKeywordPage />;
}
