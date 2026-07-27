import Sabrehaven11RetroServerKeywordPage, { generateMetadata } from './sabrehaven-11-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven11RetroServerKeywordPage />;
}
