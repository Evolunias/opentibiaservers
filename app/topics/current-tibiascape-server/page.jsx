import CurrentTibiascapeServerKeywordPage, { generateMetadata } from './current-tibiascape-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiascapeServerKeywordPage />;
}
