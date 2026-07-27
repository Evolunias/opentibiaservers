import SecuraServerKeywordPage, { generateMetadata } from './secura-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SecuraServerKeywordPage />;
}
