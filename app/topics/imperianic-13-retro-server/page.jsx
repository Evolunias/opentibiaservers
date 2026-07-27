import Imperianic13RetroServerKeywordPage, { generateMetadata } from './imperianic-13-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Imperianic13RetroServerKeywordPage />;
}
