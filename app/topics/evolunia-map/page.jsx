import EvoluniaMapKeywordPage, { generateMetadata } from './evolunia-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaMapKeywordPage />;
}
