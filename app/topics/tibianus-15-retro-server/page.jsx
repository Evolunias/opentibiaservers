import Tibianus15RetroServerKeywordPage, { generateMetadata } from './tibianus-15-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus15RetroServerKeywordPage />;
}
