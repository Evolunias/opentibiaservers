import RealestaRetroServerUkKeywordPage, { generateMetadata } from './realesta-retro-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaRetroServerUkKeywordPage />;
}
