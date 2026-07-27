import KyraOptionalPvpKeywordPage, { generateMetadata } from './kyra-optional-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KyraOptionalPvpKeywordPage />;
}
