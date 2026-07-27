import RuthlessChaosBossesKeywordPage, { generateMetadata } from './ruthless-chaos-bosses';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RuthlessChaosBossesKeywordPage />;
}
