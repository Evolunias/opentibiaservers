import TrimeraOptionalPvpKeywordPage, { generateMetadata } from './trimera-optional-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrimeraOptionalPvpKeywordPage />;
}
