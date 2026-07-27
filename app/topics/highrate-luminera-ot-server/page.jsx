import HighrateLumineraOtServerKeywordPage, { generateMetadata } from './highrate-luminera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateLumineraOtServerKeywordPage />;
}
