import ElderaWarsKeywordPage, { generateMetadata } from './eldera-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaWarsKeywordPage />;
}
