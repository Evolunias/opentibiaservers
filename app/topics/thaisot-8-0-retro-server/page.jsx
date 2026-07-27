import Thaisot80RetroServerKeywordPage, { generateMetadata } from './thaisot-8-0-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot80RetroServerKeywordPage />;
}
