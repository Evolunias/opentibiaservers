import NovaOptionalPvpKeywordPage, { generateMetadata } from './nova-optional-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NovaOptionalPvpKeywordPage />;
}
