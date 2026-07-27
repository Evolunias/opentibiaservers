import UnlinePvpeKeywordPage, { generateMetadata } from './unline-pvpe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlinePvpeKeywordPage />;
}
