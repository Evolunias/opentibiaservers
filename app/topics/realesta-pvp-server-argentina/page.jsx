import RealestaPvpServerArgentinaKeywordPage, { generateMetadata } from './realesta-pvp-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaPvpServerArgentinaKeywordPage />;
}
