import ShadowcoresPvpKeywordPage, { generateMetadata } from './shadowcores-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowcoresPvpKeywordPage />;
}
