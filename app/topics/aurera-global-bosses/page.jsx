import AureraGlobalBossesKeywordPage, { generateMetadata } from './aurera-global-bosses';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobalBossesKeywordPage />;
}
