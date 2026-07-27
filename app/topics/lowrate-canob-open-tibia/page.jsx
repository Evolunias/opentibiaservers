import LowrateCanobOpenTibiaKeywordPage, { generateMetadata } from './lowrate-canob-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateCanobOpenTibiaKeywordPage />;
}
