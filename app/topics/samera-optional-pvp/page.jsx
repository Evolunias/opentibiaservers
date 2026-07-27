import SameraOptionalPvpKeywordPage, { generateMetadata } from './samera-optional-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SameraOptionalPvpKeywordPage />;
}
