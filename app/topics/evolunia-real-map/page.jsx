import EvoluniaRealMapKeywordPage, { generateMetadata } from './evolunia-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaRealMapKeywordPage />;
}
