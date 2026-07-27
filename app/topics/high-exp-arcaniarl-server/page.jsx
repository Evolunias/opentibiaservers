import HighExpArcaniarlServerKeywordPage, { generateMetadata } from './high-exp-arcaniarl-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpArcaniarlServerKeywordPage />;
}
