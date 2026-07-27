import RealMapTibiaretroRulesKeywordPage, { generateMetadata } from './real-map-tibiaretro-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiaretroRulesKeywordPage />;
}
