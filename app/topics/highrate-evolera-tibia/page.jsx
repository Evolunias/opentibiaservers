import HighrateEvoleraTibiaKeywordPage, { generateMetadata } from './highrate-evolera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateEvoleraTibiaKeywordPage />;
}
