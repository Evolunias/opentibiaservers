import Thaisot81RetroServerKeywordPage, { generateMetadata } from './thaisot-8-1-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot81RetroServerKeywordPage />;
}
