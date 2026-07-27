import Rubinot12RetroServerKeywordPage, { generateMetadata } from './rubinot-12-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Rubinot12RetroServerKeywordPage />;
}
