import EvoluniaLoginKeywordPage, { generateMetadata } from './evolunia-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaLoginKeywordPage />;
}
