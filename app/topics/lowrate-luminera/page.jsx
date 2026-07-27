import LowrateLumineraKeywordPage, { generateMetadata } from './lowrate-luminera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateLumineraKeywordPage />;
}
