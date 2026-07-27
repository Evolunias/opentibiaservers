import RealestaBaiakServerMexicoKeywordPage, { generateMetadata } from './realesta-baiak-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaBaiakServerMexicoKeywordPage />;
}
