import Thaisot14RetroServerKeywordPage, { generateMetadata } from './thaisot-14-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot14RetroServerKeywordPage />;
}
