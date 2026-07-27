import MidhemPvpeServerPolandKeywordPage, { generateMetadata } from './midhem-pvpe-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemPvpeServerPolandKeywordPage />;
}
