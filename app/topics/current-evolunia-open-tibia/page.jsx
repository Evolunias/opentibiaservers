import CurrentEvoluniaOpenTibiaKeywordPage, { generateMetadata } from './current-evolunia-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentEvoluniaOpenTibiaKeywordPage />;
}
