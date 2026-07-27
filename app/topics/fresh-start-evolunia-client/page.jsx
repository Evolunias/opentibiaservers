import FreshStartEvoluniaClientKeywordPage, { generateMetadata } from './fresh-start-evolunia-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartEvoluniaClientKeywordPage />;
}
