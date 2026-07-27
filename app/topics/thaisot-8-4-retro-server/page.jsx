import Thaisot84RetroServerKeywordPage, { generateMetadata } from './thaisot-8-4-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot84RetroServerKeywordPage />;
}
