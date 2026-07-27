import EternalOdysseyBossesKeywordPage, { generateMetadata } from './eternal-odyssey-bosses';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EternalOdysseyBossesKeywordPage />;
}
