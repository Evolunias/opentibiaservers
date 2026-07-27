import Rubinot15RetroServerKeywordPage, { generateMetadata } from './rubinot-15-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Rubinot15RetroServerKeywordPage />;
}
