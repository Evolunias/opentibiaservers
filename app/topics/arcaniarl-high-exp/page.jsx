import ArcaniarlHighExpKeywordPage, { generateMetadata } from './arcaniarl-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlHighExpKeywordPage />;
}
