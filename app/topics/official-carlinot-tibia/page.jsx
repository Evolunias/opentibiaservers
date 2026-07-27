import OfficialCarlinotTibiaKeywordPage, { generateMetadata } from './official-carlinot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCarlinotTibiaKeywordPage />;
}
