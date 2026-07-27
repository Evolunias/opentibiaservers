import GuardiaOptionalPvpKeywordPage, { generateMetadata } from './guardia-optional-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GuardiaOptionalPvpKeywordPage />;
}
