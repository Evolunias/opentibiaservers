import LowrateLumineraServerKeywordPage, { generateMetadata } from './lowrate-luminera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateLumineraServerKeywordPage />;
}
