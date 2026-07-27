import PopularOxygenotOpenTibiaKeywordPage, { generateMetadata } from './popular-oxygenot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularOxygenotOpenTibiaKeywordPage />;
}
