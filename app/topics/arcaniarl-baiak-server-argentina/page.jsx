import ArcaniarlBaiakServerArgentinaKeywordPage, { generateMetadata } from './arcaniarl-baiak-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlBaiakServerArgentinaKeywordPage />;
}
