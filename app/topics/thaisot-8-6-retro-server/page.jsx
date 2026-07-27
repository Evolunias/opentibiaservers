import Thaisot86RetroServerKeywordPage, { generateMetadata } from './thaisot-8-6-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot86RetroServerKeywordPage />;
}
