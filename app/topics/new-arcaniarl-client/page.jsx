import NewArcaniarlClientKeywordPage, { generateMetadata } from './new-arcaniarl-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewArcaniarlClientKeywordPage />;
}
