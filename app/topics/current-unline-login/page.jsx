import CurrentUnlineLoginKeywordPage, { generateMetadata } from './current-unline-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentUnlineLoginKeywordPage />;
}
