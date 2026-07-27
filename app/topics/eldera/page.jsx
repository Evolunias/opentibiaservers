import ElderaKeywordPage, { generateMetadata } from './eldera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaKeywordPage />;
}
