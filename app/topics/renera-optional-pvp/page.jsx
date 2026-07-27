import ReneraOptionalPvpKeywordPage, { generateMetadata } from './renera-optional-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ReneraOptionalPvpKeywordPage />;
}
