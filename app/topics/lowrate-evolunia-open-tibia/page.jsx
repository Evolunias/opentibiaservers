import LowrateEvoluniaOpenTibiaKeywordPage, { generateMetadata } from './lowrate-evolunia-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateEvoluniaOpenTibiaKeywordPage />;
}
