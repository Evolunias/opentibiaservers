import OfficialEvoluniaOpenTibiaKeywordPage, { generateMetadata } from './official-evolunia-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialEvoluniaOpenTibiaKeywordPage />;
}
