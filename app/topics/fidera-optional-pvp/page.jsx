import FideraOptionalPvpKeywordPage, { generateMetadata } from './fidera-optional-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FideraOptionalPvpKeywordPage />;
}
