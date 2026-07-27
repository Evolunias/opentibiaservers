import Rubinot14RetroServerKeywordPage, { generateMetadata } from './rubinot-14-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Rubinot14RetroServerKeywordPage />;
}
