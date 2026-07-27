import CalmeraOptionalPvpKeywordPage, { generateMetadata } from './calmera-optional-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOptionalPvpKeywordPage />;
}
