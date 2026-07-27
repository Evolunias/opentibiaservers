import CurrentTibianusServerKeywordPage, { generateMetadata } from './current-tibianus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibianusServerKeywordPage />;
}
