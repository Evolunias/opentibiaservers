import TibianusGermanyServerKeywordPage, { generateMetadata } from './tibianus-germany-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusGermanyServerKeywordPage />;
}
