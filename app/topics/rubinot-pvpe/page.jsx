import RubinotPvpeKeywordPage, { generateMetadata } from './rubinot-pvpe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotPvpeKeywordPage />;
}
