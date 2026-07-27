import CurrentUnlineClientKeywordPage, { generateMetadata } from './current-unline-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentUnlineClientKeywordPage />;
}
