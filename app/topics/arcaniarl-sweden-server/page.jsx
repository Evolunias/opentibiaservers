import ArcaniarlSwedenServerKeywordPage, { generateMetadata } from './arcaniarl-sweden-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlSwedenServerKeywordPage />;
}
