import MistOfDeathUkServerKeywordPage, { generateMetadata } from './mist-of-death-uk-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MistOfDeathUkServerKeywordPage />;
}
