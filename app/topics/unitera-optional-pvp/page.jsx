import UniteraOptionalPvpKeywordPage, { generateMetadata } from './unitera-optional-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UniteraOptionalPvpKeywordPage />;
}
