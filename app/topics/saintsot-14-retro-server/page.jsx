import Saintsot14RetroServerKeywordPage, { generateMetadata } from './saintsot-14-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Saintsot14RetroServerKeywordPage />;
}
