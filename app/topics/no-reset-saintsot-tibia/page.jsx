import NoResetSaintsotTibiaKeywordPage, { generateMetadata } from './no-reset-saintsot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetSaintsotTibiaKeywordPage />;
}
