import LowrateKasteriaOpenTibiaKeywordPage, { generateMetadata } from './lowrate-kasteria-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateKasteriaOpenTibiaKeywordPage />;
}
