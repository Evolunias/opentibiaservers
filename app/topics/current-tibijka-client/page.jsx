import CurrentTibijkaClientKeywordPage, { generateMetadata } from './current-tibijka-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibijkaClientKeywordPage />;
}
