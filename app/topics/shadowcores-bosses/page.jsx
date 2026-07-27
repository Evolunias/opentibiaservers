import ShadowcoresBossesKeywordPage, { generateMetadata } from './shadowcores-bosses';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowcoresBossesKeywordPage />;
}
