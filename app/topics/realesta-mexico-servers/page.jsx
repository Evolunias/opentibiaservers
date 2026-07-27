import RealestaMexicoServersKeywordPage, { generateMetadata } from './realesta-mexico-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaMexicoServersKeywordPage />;
}
