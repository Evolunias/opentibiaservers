import EvoNepreniaServerKeywordPage, { generateMetadata } from './evo-neprenia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoNepreniaServerKeywordPage />;
}
