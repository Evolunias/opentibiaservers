import TopThaisotOpenTibiaKeywordPage, { generateMetadata } from './top-thaisot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopThaisotOpenTibiaKeywordPage />;
}
