import Miracle12RetroServerKeywordPage, { generateMetadata } from './miracle-12-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Miracle12RetroServerKeywordPage />;
}
