import RealMapEvoluniaServerKeywordPage, { generateMetadata } from './real-map-evolunia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapEvoluniaServerKeywordPage />;
}
