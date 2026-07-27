import LowrateLumineraClientKeywordPage, { generateMetadata } from './lowrate-luminera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateLumineraClientKeywordPage />;
}
