import LumineraArgentinaServerKeywordPage, { generateMetadata } from './luminera-argentina-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraArgentinaServerKeywordPage />;
}
