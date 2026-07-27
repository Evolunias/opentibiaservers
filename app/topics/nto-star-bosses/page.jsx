import NtoStarBossesKeywordPage, { generateMetadata } from './nto-star-bosses';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarBossesKeywordPage />;
}
