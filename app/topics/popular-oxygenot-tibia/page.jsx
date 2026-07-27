import PopularOxygenotTibiaKeywordPage, { generateMetadata } from './popular-oxygenot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularOxygenotTibiaKeywordPage />;
}
