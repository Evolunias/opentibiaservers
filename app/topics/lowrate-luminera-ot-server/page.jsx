import LowrateLumineraOtServerKeywordPage, { generateMetadata } from './lowrate-luminera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateLumineraOtServerKeywordPage />;
}
