import HighrateSaintsotOpenTibiaKeywordPage, { generateMetadata } from './highrate-saintsot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateSaintsotOpenTibiaKeywordPage />;
}
