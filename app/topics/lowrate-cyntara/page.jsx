import LowrateCyntaraKeywordPage, { generateMetadata } from './lowrate-cyntara';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateCyntaraKeywordPage />;
}
