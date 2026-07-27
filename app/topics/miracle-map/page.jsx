import MiracleMapKeywordPage, { generateMetadata } from './miracle-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MiracleMapKeywordPage />;
}
