import HighrateEvoluniaOpenTibiaKeywordPage, { generateMetadata } from './highrate-evolunia-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateEvoluniaOpenTibiaKeywordPage />;
}
