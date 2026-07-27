import AldoraOptionalPvpKeywordPage, { generateMetadata } from './aldora-optional-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AldoraOptionalPvpKeywordPage />;
}
