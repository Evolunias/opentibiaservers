import NepteraOptionalPvpKeywordPage, { generateMetadata } from './neptera-optional-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepteraOptionalPvpKeywordPage />;
}
