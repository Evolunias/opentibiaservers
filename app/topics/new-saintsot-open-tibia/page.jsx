import NewSaintsotOpenTibiaKeywordPage, { generateMetadata } from './new-saintsot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSaintsotOpenTibiaKeywordPage />;
}
