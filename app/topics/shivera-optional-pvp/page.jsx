import ShiveraOptionalPvpKeywordPage, { generateMetadata } from './shivera-optional-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShiveraOptionalPvpKeywordPage />;
}
