import TopEvoluniaOpenTibiaKeywordPage, { generateMetadata } from './top-evolunia-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopEvoluniaOpenTibiaKeywordPage />;
}
