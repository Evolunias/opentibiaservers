import LowrateThaisotTibiaKeywordPage, { generateMetadata } from './lowrate-thaisot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateThaisotTibiaKeywordPage />;
}
