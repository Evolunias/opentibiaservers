import EvoluniaClientKeywordPage, { generateMetadata } from './evolunia-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaClientKeywordPage />;
}
