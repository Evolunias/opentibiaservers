import Sabrehaven15RetroServerKeywordPage, { generateMetadata } from './sabrehaven-15-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven15RetroServerKeywordPage />;
}
