import OfficialRealestaOpenTibiaKeywordPage, { generateMetadata } from './official-realesta-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRealestaOpenTibiaKeywordPage />;
}
