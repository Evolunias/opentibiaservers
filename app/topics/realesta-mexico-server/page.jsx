import RealestaMexicoServerKeywordPage, { generateMetadata } from './realesta-mexico-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaMexicoServerKeywordPage />;
}
