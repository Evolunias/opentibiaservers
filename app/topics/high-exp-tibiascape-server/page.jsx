import HighExpTibiascapeServerKeywordPage, { generateMetadata } from './high-exp-tibiascape-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpTibiascapeServerKeywordPage />;
}
