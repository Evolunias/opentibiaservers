import RubinotPvpeServerArgentinaKeywordPage, { generateMetadata } from './rubinot-pvpe-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotPvpeServerArgentinaKeywordPage />;
}
