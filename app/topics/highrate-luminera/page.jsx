import HighrateLumineraKeywordPage, { generateMetadata } from './highrate-luminera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateLumineraKeywordPage />;
}
