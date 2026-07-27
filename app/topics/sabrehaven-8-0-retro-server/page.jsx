import Sabrehaven80RetroServerKeywordPage, { generateMetadata } from './sabrehaven-8-0-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven80RetroServerKeywordPage />;
}
