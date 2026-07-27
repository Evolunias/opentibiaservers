import ActiveSaintsotOpenTibiaKeywordPage, { generateMetadata } from './active-saintsot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveSaintsotOpenTibiaKeywordPage />;
}
