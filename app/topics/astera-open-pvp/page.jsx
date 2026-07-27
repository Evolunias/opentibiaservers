import AsteraOpenPvpKeywordPage, { generateMetadata } from './astera-open-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AsteraOpenPvpKeywordPage />;
}
