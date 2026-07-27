import Unline13RetroServerKeywordPage, { generateMetadata } from './unline-13-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Unline13RetroServerKeywordPage />;
}
