import Thaisot11RetroServerKeywordPage, { generateMetadata } from './thaisot-11-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot11RetroServerKeywordPage />;
}
