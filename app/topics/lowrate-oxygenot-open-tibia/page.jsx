import LowrateOxygenotOpenTibiaKeywordPage, { generateMetadata } from './lowrate-oxygenot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateOxygenotOpenTibiaKeywordPage />;
}
