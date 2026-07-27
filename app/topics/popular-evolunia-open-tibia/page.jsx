import PopularEvoluniaOpenTibiaKeywordPage, { generateMetadata } from './popular-evolunia-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularEvoluniaOpenTibiaKeywordPage />;
}
