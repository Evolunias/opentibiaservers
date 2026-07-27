import Sabrehaven71RetroServerKeywordPage, { generateMetadata } from './sabrehaven-7-1-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven71RetroServerKeywordPage />;
}
