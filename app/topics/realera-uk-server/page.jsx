import RealeraUkServerKeywordPage, { generateMetadata } from './realera-uk-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraUkServerKeywordPage />;
}
