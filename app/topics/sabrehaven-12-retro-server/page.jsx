import Sabrehaven12RetroServerKeywordPage, { generateMetadata } from './sabrehaven-12-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven12RetroServerKeywordPage />;
}
