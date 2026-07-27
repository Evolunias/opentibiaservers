import LowrateAureraGlobalTibiaKeywordPage, { generateMetadata } from './lowrate-aurera-global-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateAureraGlobalTibiaKeywordPage />;
}
