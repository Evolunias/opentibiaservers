import Originaltibia11RetroServerKeywordPage, { generateMetadata } from './originaltibia-11-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Originaltibia11RetroServerKeywordPage />;
}
