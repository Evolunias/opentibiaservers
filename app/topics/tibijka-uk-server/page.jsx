import TibijkaUkServerKeywordPage, { generateMetadata } from './tibijka-uk-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaUkServerKeywordPage />;
}
