import Sabrehaven13RetroServerKeywordPage, { generateMetadata } from './sabrehaven-13-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven13RetroServerKeywordPage />;
}
