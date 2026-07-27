import PopularThaisotOpenTibiaKeywordPage, { generateMetadata } from './popular-thaisot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularThaisotOpenTibiaKeywordPage />;
}
