import LowrateTibianusServerKeywordPage, { generateMetadata } from './lowrate-tibianus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibianusServerKeywordPage />;
}
