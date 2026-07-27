import MiracleResetKeywordPage, { generateMetadata } from './miracle-reset';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MiracleResetKeywordPage />;
}
