import HighrateTibianusServerKeywordPage, { generateMetadata } from './highrate-tibianus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibianusServerKeywordPage />;
}
