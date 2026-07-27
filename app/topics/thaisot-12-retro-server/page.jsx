import Thaisot12RetroServerKeywordPage, { generateMetadata } from './thaisot-12-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot12RetroServerKeywordPage />;
}
