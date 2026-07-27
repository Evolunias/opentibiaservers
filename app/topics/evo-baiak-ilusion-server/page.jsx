import EvoBaiakIlusionServerKeywordPage, { generateMetadata } from './evo-baiak-ilusion-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoBaiakIlusionServerKeywordPage />;
}
