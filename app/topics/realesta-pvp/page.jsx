import RealestaPvpKeywordPage, { generateMetadata } from './realesta-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaPvpKeywordPage />;
}
