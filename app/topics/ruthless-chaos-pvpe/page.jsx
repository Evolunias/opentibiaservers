import RuthlessChaosPvpeKeywordPage, { generateMetadata } from './ruthless-chaos-pvpe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RuthlessChaosPvpeKeywordPage />;
}
