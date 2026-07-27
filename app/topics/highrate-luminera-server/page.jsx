import HighrateLumineraServerKeywordPage, { generateMetadata } from './highrate-luminera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateLumineraServerKeywordPage />;
}
