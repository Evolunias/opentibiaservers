import Thaisot13RetroServerKeywordPage, { generateMetadata } from './thaisot-13-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot13RetroServerKeywordPage />;
}
