import ElderaHighExpKeywordPage, { generateMetadata } from './eldera-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaHighExpKeywordPage />;
}
