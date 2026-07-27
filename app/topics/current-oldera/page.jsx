import CurrentOlderaKeywordPage, { generateMetadata } from './current-oldera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentOlderaKeywordPage />;
}
