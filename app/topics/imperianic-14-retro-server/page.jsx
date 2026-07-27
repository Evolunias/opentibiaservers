import Imperianic14RetroServerKeywordPage, { generateMetadata } from './imperianic-14-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Imperianic14RetroServerKeywordPage />;
}
