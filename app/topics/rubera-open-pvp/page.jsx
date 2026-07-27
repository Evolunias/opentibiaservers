import RuberaOpenPvpKeywordPage, { generateMetadata } from './rubera-open-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RuberaOpenPvpKeywordPage />;
}
