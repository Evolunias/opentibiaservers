import CurrentTibijkaLoginKeywordPage, { generateMetadata } from './current-tibijka-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibijkaLoginKeywordPage />;
}
