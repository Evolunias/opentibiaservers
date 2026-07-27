import NilotPvpKeywordPage, { generateMetadata } from './nilot-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotPvpKeywordPage />;
}
