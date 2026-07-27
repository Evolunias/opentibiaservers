import Unline11RetroServerKeywordPage, { generateMetadata } from './unline-11-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Unline11RetroServerKeywordPage />;
}
