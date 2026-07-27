import HighrateLumineraOtKeywordPage, { generateMetadata } from './highrate-luminera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateLumineraOtKeywordPage />;
}
