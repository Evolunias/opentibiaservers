import HighrateLumineraOtsKeywordPage, { generateMetadata } from './highrate-luminera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateLumineraOtsKeywordPage />;
}
