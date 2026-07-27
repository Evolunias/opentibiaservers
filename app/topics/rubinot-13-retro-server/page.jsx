import Rubinot13RetroServerKeywordPage, { generateMetadata } from './rubinot-13-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Rubinot13RetroServerKeywordPage />;
}
