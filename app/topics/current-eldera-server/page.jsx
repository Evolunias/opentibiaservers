import CurrentElderaServerKeywordPage, { generateMetadata } from './current-eldera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentElderaServerKeywordPage />;
}
