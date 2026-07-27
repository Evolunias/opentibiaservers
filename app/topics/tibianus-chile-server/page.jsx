import TibianusChileServerKeywordPage, { generateMetadata } from './tibianus-chile-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusChileServerKeywordPage />;
}
