import TibianusRetroServerMexicoKeywordPage, { generateMetadata } from './tibianus-retro-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusRetroServerMexicoKeywordPage />;
}
