import Unline15RetroServerKeywordPage, { generateMetadata } from './unline-15-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Unline15RetroServerKeywordPage />;
}
