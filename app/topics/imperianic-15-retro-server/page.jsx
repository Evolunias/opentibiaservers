import Imperianic15RetroServerKeywordPage, { generateMetadata } from './imperianic-15-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Imperianic15RetroServerKeywordPage />;
}
