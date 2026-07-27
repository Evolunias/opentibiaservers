import ArcaniarlClientKeywordPage, { generateMetadata } from './arcaniarl-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlClientKeywordPage />;
}
