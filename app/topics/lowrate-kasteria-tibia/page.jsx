import LowrateKasteriaTibiaKeywordPage, { generateMetadata } from './lowrate-kasteria-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateKasteriaTibiaKeywordPage />;
}
