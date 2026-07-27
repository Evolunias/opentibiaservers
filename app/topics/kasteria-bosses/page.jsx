import KasteriaBossesKeywordPage, { generateMetadata } from './kasteria-bosses';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaBossesKeywordPage />;
}
