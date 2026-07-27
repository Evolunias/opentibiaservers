import Thaisot71RetroServerKeywordPage, { generateMetadata } from './thaisot-7-1-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot71RetroServerKeywordPage />;
}
