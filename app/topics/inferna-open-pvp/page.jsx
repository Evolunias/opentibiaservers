import InfernaOpenPvpKeywordPage, { generateMetadata } from './inferna-open-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernaOpenPvpKeywordPage />;
}
