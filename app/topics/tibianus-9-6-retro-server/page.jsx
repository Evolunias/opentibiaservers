import Tibianus96RetroServerKeywordPage, { generateMetadata } from './tibianus-9-6-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus96RetroServerKeywordPage />;
}
