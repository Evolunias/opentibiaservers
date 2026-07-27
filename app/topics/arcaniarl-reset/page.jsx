import ArcaniarlResetKeywordPage, { generateMetadata } from './arcaniarl-reset';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlResetKeywordPage />;
}
