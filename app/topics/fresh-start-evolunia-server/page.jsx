import FreshStartEvoluniaServerKeywordPage, { generateMetadata } from './fresh-start-evolunia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartEvoluniaServerKeywordPage />;
}
