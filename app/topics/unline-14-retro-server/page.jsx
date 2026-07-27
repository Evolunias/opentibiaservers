import Unline14RetroServerKeywordPage, { generateMetadata } from './unline-14-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Unline14RetroServerKeywordPage />;
}
