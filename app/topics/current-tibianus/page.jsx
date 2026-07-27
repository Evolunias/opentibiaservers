import CurrentTibianusKeywordPage, { generateMetadata } from './current-tibianus';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibianusKeywordPage />;
}
