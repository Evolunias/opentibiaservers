import ArcaniarlBaiakServerUkKeywordPage, { generateMetadata } from './arcaniarl-baiak-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlBaiakServerUkKeywordPage />;
}
