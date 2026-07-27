import SoleraOptionalPvpKeywordPage, { generateMetadata } from './solera-optional-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SoleraOptionalPvpKeywordPage />;
}
