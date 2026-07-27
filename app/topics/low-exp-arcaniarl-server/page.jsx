import LowExpArcaniarlServerKeywordPage, { generateMetadata } from './low-exp-arcaniarl-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpArcaniarlServerKeywordPage />;
}
