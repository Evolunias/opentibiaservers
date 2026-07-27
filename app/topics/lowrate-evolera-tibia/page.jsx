import LowrateEvoleraTibiaKeywordPage, { generateMetadata } from './lowrate-evolera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateEvoleraTibiaKeywordPage />;
}
