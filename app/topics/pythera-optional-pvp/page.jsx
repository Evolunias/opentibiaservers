import PytheraOptionalPvpKeywordPage, { generateMetadata } from './pythera-optional-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PytheraOptionalPvpKeywordPage />;
}
