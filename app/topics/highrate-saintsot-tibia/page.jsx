import HighrateSaintsotTibiaKeywordPage, { generateMetadata } from './highrate-saintsot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateSaintsotTibiaKeywordPage />;
}
