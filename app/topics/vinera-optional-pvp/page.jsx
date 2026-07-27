import VineraOptionalPvpKeywordPage, { generateMetadata } from './vinera-optional-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VineraOptionalPvpKeywordPage />;
}
