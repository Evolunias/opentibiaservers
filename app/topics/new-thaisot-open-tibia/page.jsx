import NewThaisotOpenTibiaKeywordPage, { generateMetadata } from './new-thaisot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewThaisotOpenTibiaKeywordPage />;
}
