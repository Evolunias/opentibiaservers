import PaceraOptionalPvpKeywordPage, { generateMetadata } from './pacera-optional-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PaceraOptionalPvpKeywordPage />;
}
