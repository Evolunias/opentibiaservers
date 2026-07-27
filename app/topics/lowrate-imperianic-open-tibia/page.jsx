import LowrateImperianicOpenTibiaKeywordPage, { generateMetadata } from './lowrate-imperianic-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateImperianicOpenTibiaKeywordPage />;
}
