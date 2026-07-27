import HighrateThaisotOpenTibiaKeywordPage, { generateMetadata } from './highrate-thaisot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateThaisotOpenTibiaKeywordPage />;
}
