import LowrateSaintsotTibiaKeywordPage, { generateMetadata } from './lowrate-saintsot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateSaintsotTibiaKeywordPage />;
}
