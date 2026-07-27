import CurrentCyntaraKeywordPage, { generateMetadata } from './current-cyntara';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentCyntaraKeywordPage />;
}
