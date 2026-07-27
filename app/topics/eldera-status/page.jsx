import ElderaStatusKeywordPage, { generateMetadata } from './eldera-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaStatusKeywordPage />;
}
