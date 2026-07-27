import TitaniaOptionalPvpKeywordPage, { generateMetadata } from './titania-optional-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TitaniaOptionalPvpKeywordPage />;
}
