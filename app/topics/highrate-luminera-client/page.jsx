import HighrateLumineraClientKeywordPage, { generateMetadata } from './highrate-luminera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateLumineraClientKeywordPage />;
}
