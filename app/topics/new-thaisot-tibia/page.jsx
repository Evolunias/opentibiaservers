import NewThaisotTibiaKeywordPage, { generateMetadata } from './new-thaisot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewThaisotTibiaKeywordPage />;
}
