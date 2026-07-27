import ActiveEvoluniaOpenTibiaKeywordPage, { generateMetadata } from './active-evolunia-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveEvoluniaOpenTibiaKeywordPage />;
}
