import LumineraSwedenServerKeywordPage, { generateMetadata } from './luminera-sweden-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraSwedenServerKeywordPage />;
}
