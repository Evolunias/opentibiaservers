import ArcaniarlBaiakServerUsaKeywordPage, { generateMetadata } from './arcaniarl-baiak-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlBaiakServerUsaKeywordPage />;
}
