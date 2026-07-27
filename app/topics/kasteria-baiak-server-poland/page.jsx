import KasteriaBaiakServerPolandKeywordPage, { generateMetadata } from './kasteria-baiak-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaBaiakServerPolandKeywordPage />;
}
