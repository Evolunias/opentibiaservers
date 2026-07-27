import CurrentUnlineServerKeywordPage, { generateMetadata } from './current-unline-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentUnlineServerKeywordPage />;
}
