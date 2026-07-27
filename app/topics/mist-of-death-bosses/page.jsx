import MistOfDeathBossesKeywordPage, { generateMetadata } from './mist-of-death-bosses';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MistOfDeathBossesKeywordPage />;
}
