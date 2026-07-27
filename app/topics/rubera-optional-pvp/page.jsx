import RuberaOptionalPvpKeywordPage, { generateMetadata } from './rubera-optional-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RuberaOptionalPvpKeywordPage />;
}
