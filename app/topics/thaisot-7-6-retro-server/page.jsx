import Thaisot76RetroServerKeywordPage, { generateMetadata } from './thaisot-7-6-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot76RetroServerKeywordPage />;
}
