import LowrateImperianicTibiaKeywordPage, { generateMetadata } from './lowrate-imperianic-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateImperianicTibiaKeywordPage />;
}
