import Thaisot96RetroServerKeywordPage, { generateMetadata } from './thaisot-9-6-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot96RetroServerKeywordPage />;
}
