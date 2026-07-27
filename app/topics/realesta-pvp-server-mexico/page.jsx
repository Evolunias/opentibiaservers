import RealestaPvpServerMexicoKeywordPage, { generateMetadata } from './realesta-pvp-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaPvpServerMexicoKeywordPage />;
}
