import CurrentOlderaServerKeywordPage, { generateMetadata } from './current-oldera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentOlderaServerKeywordPage />;
}
