import ArcaniarlMapKeywordPage, { generateMetadata } from './arcaniarl-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlMapKeywordPage />;
}
