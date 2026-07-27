import LumineraUsaServerKeywordPage, { generateMetadata } from './luminera-usa-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraUsaServerKeywordPage />;
}
