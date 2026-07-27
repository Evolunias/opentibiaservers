import MiracleChileServerKeywordPage, { generateMetadata } from './miracle-chile-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MiracleChileServerKeywordPage />;
}
