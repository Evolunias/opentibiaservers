import Imperianic11RetroServerKeywordPage, { generateMetadata } from './imperianic-11-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Imperianic11RetroServerKeywordPage />;
}
