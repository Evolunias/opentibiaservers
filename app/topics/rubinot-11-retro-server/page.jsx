import Rubinot11RetroServerKeywordPage, { generateMetadata } from './rubinot-11-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Rubinot11RetroServerKeywordPage />;
}
