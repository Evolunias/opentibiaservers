import RealMapEvoluniaOpenTibiaKeywordPage, { generateMetadata } from './real-map-evolunia-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapEvoluniaOpenTibiaKeywordPage />;
}
