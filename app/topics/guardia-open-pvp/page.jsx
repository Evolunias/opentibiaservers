import GuardiaOpenPvpKeywordPage, { generateMetadata } from './guardia-open-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GuardiaOpenPvpKeywordPage />;
}
