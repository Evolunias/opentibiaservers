import MiracleLoginKeywordPage, { generateMetadata } from './miracle-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MiracleLoginKeywordPage />;
}
