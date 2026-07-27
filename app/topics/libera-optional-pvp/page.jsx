import LiberaOptionalPvpKeywordPage, { generateMetadata } from './libera-optional-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LiberaOptionalPvpKeywordPage />;
}
