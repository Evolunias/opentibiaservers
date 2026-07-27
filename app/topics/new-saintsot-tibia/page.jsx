import NewSaintsotTibiaKeywordPage, { generateMetadata } from './new-saintsot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSaintsotTibiaKeywordPage />;
}
