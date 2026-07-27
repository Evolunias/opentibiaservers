import RealestaUkServerKeywordPage, { generateMetadata } from './realesta-uk-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaUkServerKeywordPage />;
}
