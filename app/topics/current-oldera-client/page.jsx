import CurrentOlderaClientKeywordPage, { generateMetadata } from './current-oldera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentOlderaClientKeywordPage />;
}
