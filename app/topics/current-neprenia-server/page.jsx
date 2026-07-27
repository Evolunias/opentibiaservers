import CurrentNepreniaServerKeywordPage, { generateMetadata } from './current-neprenia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentNepreniaServerKeywordPage />;
}
