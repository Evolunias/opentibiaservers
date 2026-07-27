import MeneraOptionalPvpKeywordPage, { generateMetadata } from './menera-optional-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MeneraOptionalPvpKeywordPage />;
}
