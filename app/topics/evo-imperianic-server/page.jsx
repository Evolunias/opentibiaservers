import EvoImperianicServerKeywordPage, { generateMetadata } from './evo-imperianic-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoImperianicServerKeywordPage />;
}
