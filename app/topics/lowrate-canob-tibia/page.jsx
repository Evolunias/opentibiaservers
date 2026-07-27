import LowrateCanobTibiaKeywordPage, { generateMetadata } from './lowrate-canob-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateCanobTibiaKeywordPage />;
}
