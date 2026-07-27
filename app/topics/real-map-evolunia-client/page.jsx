import RealMapEvoluniaClientKeywordPage, { generateMetadata } from './real-map-evolunia-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapEvoluniaClientKeywordPage />;
}
