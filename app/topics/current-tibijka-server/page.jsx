import CurrentTibijkaServerKeywordPage, { generateMetadata } from './current-tibijka-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibijkaServerKeywordPage />;
}
