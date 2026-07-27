import MiracleHighExpKeywordPage, { generateMetadata } from './miracle-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MiracleHighExpKeywordPage />;
}
