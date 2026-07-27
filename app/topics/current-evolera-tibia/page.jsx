import CurrentEvoleraTibiaKeywordPage, { generateMetadata } from './current-evolera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentEvoleraTibiaKeywordPage />;
}
