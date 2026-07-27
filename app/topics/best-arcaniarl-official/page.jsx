import BestArcaniarlOfficialKeywordPage, { generateMetadata } from './best-arcaniarl-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestArcaniarlOfficialKeywordPage />;
}
