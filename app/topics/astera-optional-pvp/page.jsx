import AsteraOptionalPvpKeywordPage, { generateMetadata } from './astera-optional-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AsteraOptionalPvpKeywordPage />;
}
