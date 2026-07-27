import AmeraOptionalPvpKeywordPage, { generateMetadata } from './amera-optional-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeraOptionalPvpKeywordPage />;
}
