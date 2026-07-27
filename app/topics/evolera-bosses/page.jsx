import EvoleraBossesKeywordPage, { generateMetadata } from './evolera-bosses';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraBossesKeywordPage />;
}
