import RuthlessChaosPvpKeywordPage, { generateMetadata } from './ruthless-chaos-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RuthlessChaosPvpKeywordPage />;
}
