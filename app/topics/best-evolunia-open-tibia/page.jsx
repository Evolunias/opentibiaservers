import BestEvoluniaOpenTibiaKeywordPage, { generateMetadata } from './best-evolunia-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestEvoluniaOpenTibiaKeywordPage />;
}
