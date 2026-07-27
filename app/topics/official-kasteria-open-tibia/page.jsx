import OfficialKasteriaOpenTibiaKeywordPage, { generateMetadata } from './official-kasteria-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialKasteriaOpenTibiaKeywordPage />;
}
