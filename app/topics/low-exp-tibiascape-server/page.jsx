import LowExpTibiascapeServerKeywordPage, { generateMetadata } from './low-exp-tibiascape-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpTibiascapeServerKeywordPage />;
}
