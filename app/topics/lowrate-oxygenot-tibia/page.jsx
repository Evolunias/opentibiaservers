import LowrateOxygenotTibiaKeywordPage, { generateMetadata } from './lowrate-oxygenot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateOxygenotTibiaKeywordPage />;
}
