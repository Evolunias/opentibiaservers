import HighrateKasteriaTibiaKeywordPage, { generateMetadata } from './highrate-kasteria-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateKasteriaTibiaKeywordPage />;
}
