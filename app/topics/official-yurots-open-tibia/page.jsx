import OfficialYurotsOpenTibiaKeywordPage, { generateMetadata } from './official-yurots-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialYurotsOpenTibiaKeywordPage />;
}
