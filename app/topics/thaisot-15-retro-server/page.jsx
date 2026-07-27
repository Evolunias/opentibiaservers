import Thaisot15RetroServerKeywordPage, { generateMetadata } from './thaisot-15-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot15RetroServerKeywordPage />;
}
